import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health API route
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", app: "SAUDI EXPLORER AI", phase: 1 });
  });

  // AI Itinerary Generation API route (Server-Side Gemini API Proxy)
  app.post("/api/generate-itinerary", async (req, res) => {
    try {
      const { city, days, budget, interest } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.status(200).json({
          fallback: true,
          itinerary: {
            title: `خطة سياحية مخصصة: ${city || 'العلا'} (${days || 3} أيام - باقة ${budget || 'فاخرة'})`,
            summary: `تم تصميم هذا الجدول الذكي بعناية ليلبي اهتمامك بـ "${interest || 'التراث والثقافة'}".`,
            daysList: [
              {
                day: 1,
                title: 'الوصول، الانغماس الثقافي وغروب الشمس الشاعرية',
                morning: 'الوصول والاستقرار بالفندق ثم احتساء القهوة السعودية والتمور الفاخرة.',
                afternoon: `جولة استكشافية في المرتفعات التراثية وزيارة معالم ${city} الأساسية.`,
                evening: 'عشاء فاخر في مطعم محلي ذو طابع نجدي/حجازي مع إطلالة على النجوم.'
              },
              {
                day: 2,
                title: 'استكشاف الآثار العالمية والتجارب الميدانية',
                morning: 'زيارة المواقع الأثرية والمتاحف التراثية المفتوحة برفقة مرشد سياحي معتمد.',
                afternoon: 'غداء تراثي ثم جولة مغامرات خفيفة أو تسوق في الأسواق الشعبية والحرفية.',
                evening: 'حضور فعالية ثقافية حية واستعراض الفنون التراثية والموسيقية.'
              },
              {
                day: 3,
                title: 'الاسترخاء والتسوق التذكاري والوداع',
                morning: 'جلسة تأمل واستجمام في المنتجع والاستمتاع بالطبيعة الخلابة.',
                afternoon: 'شراء الهدايا التذكارية والعطور والمنتجات التراثية الوطنية.',
                evening: 'تناول وجبة الوداع والاستعداد للمغادرة بذكرى لا تُنسى.'
              }
            ]
          }
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompt = `قم بإنشاء جدول سياحي فاخر ومتكامل باللغة العربية لمدينة ${city} لمدة ${days} أيام بأسلوب سياحي فاخر تناسب ميزانية ${budget} واهتمام بـ ${interest}.
      أرجع الإجابة بشكل JSON يحتوي على:
      title (عنوان الخطة), summary (ملخص قصير), daysList (مصفوفة للأيام تحتوي على day, title, morning, afternoon, evening).
      `;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });

      const responseText = response.text || "";
      let parsed = JSON.parse(responseText);

      return res.json({
        success: true,
        itinerary: parsed
      });

    } catch (error: any) {
      console.error("Gemini Generation Error:", error?.message || error);
      return res.status(200).json({
        fallback: true,
        itinerary: {
          title: `خطة سياحية مخصصة: ${req.body.city || 'العلا'} (${req.body.days || 3} أيام)`,
          summary: `تم تصميم هذا الجدول الذكي ليلبي اهتمامك بـ "${req.body.interest || 'التراث'}".`,
          daysList: [
            {
              day: 1,
              title: 'الوصول والانغماس التراثي',
              morning: 'الوصول بالفندق والاستمتاع بالضيافة السعودية العريقة.',
              afternoon: 'جولة ميدانية مع مرشد محلي لمشاهدة المعالم التاريخية.',
              evening: 'جلسة عشاء نجدي/حجازي فاخر تحت أضواء النجوم.'
            },
            {
              day: 2,
              title: 'التجارب العالمية والفعاليات',
              morning: 'استكشاف الأماكن الأثرية والمتاحف التفاعلية.',
              afternoon: 'تذوق المأكولات المحلية والتسوق في الأسواق التراثية.',
              evening: 'حضور عرض موسيقي/فني في الموقع التاريخي.'
            }
          ]
        }
      });
    }
  });

  // Vite Middleware Setup for Development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
