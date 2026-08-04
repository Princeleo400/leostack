import { useEffect } from "react";

// Opens DevTools → console and type leoHelp() to start the chain

export default function ConsoleEasterEgg() {
  useEffect(() => {
    // ── Initial banner — fires on every page load ── //
    console.log(
      "%c  ⚡ leostack.dev  ",
      [
        "background: #4580ff",
        "color: #ffffff",
        "font-size: 15px",
        "font-weight: 700",
        "padding: 8px 20px",
        "border-radius: 6px",
        "letter-spacing: 0.05em",
      ].join(";"),
    );

    console.log(
      "%c Hey fellow developer! 👀 Inspecting my source code?",
      "color: #7aabff; font-size: 13px; font-style: italic;",
    );

    console.log(
      "%c → Type %cleoHelp()%c to unlock my hidden achievements matrix.",
      "color: #7a9abb; font-size: 13px;",
      "color: #4580ff; font-weight: 700; font-size: 13px;",
      "color: #7a9abb; font-size: 13px;",
    );

    // ── leoHelp() — first tier ──── //
    window.leoHelp = () => {
      console.log(
        "%c  GET /api/v1/developer  ",
        [
          "background: #0d1928",
          "color: #4580ff",
          "font-weight: 700",
          "font-size: 12px",
          "padding: 5px 14px",
          "border-radius: 4px",
          "border: 1px solid #4580ff",
        ].join(";"),
      );

      console.log(
        "%c 200 OK",
        "color: #22c55e; font-weight: 700; font-size: 12px;",
      );

      console.table({
        name: "Chukwuemeka Michael Ohaga",
        alias: "Leo",
        role: "Senior Frontend Engineer",
        location: "Port Harcourt, Nigeria · Remote-ready · WAT (UTC+1)",
        stack: "React · Next.js · TypeScript · Tailwind · Supabase",
        available: "✅ YES",
        response: "< 24 hours",
        contact: "getintouch.leo@gmail.com",
        hire: "https://leostack.netlify.app/contact",
        github: "https://github.com/princeleo400",
        linkedin: "https://linkedin.com/in/chukwuemeka-ohaga",
      });

      console.log(
        "%c Now type %cleoStack()%c to unlock my achievement matrix 🏆",
        "color: #7a9abb; font-size: 12px;",
        "color: #22c55e; font-weight: 700; font-size: 12px;",
        "color: #7a9abb; font-size: 12px;",
      );
    };

    // ── leoStack() — second tier, staggered reveal ─────────────────────────
    window.leoStack = () => {
      console.log(
        "%c  🏆 ACHIEVEMENT MATRIX UNLOCKED  ",
        [
          "background: linear-gradient(135deg, #4580ff, #7aabff)",
          "color: #ffffff",
          "font-size: 13px",
          "font-weight: 700",
          "padding: 7px 18px",
          "border-radius: 5px",
        ].join(";"),
      );

      const achievements = [
        { icon: "🚀", text: "Shipped 12+ client products across Africa" },
        {
          icon: "⚡",
          text: "Built Awasource hiring platform from scratch — multi-currency, full auth flow",
        },
        {
          icon: "🌍",
          text: "Proctorme serves 10,000+ students across 8 African countries",
        },
        {
          icon: "🎯",
          text: "4+ years shipping production React applications on deadline",
        },
        {
          icon: "🏗 ",
          text: "Full-stack capable — Node.js · Supabase · Firebase · GraphQL",
        },
        {
          icon: "💳",
          text: "Implemented Paystack payment flows in 3 live products",
        },
        {
          icon: "🎨",
          text: "UI/UX obsessed — pixel-perfect from Figma to production",
        },
        {
          icon: "📱",
          text: "Every project ships fully responsive — mobile-first always",
        },
      ];

      achievements.forEach(({ icon, text }, i) => {
        setTimeout(() => {
          console.log(
            `%c ${icon}  ${text}`,
            "color: #22c55e; font-size: 12.5px; padding: 1px 0;",
          );
        }, i * 280);
      });

      // Final CTA after all achievements reveal
      setTimeout(
        () => {
          console.log("\n");
          console.log(
            "%c  Ready to work together?  ",
            [
              "background: #22c55e",
              "color: #ffffff",
              "font-weight: 700",
              "font-size: 13px",
              "padding: 7px 18px",
              "border-radius: 5px",
            ].join(";"),
          );
          console.log(
            "%c → hello@leostack.dev  |  leostack.netlify.app/contact",
            "color: #4580ff; font-size: 13px; text-decoration: underline;",
          );
          console.log(
            "%c Type %cleoStack.secret()%c for one more surprise 🤫",
            "color: #3d6080; font-size: 11px; font-style: italic;",
            "color: #f59e0b; font-weight: 700; font-size: 11px;",
            "color: #3d6080; font-size: 11px; font-style: italic;",
          );
        },
        achievements.length * 280 + 400,
      );
    };

    // ── leoStack.secret() — third tier easter egg ──────────────────────────
    window.leoStack = Object.assign(window.leoStack, {
      secret: () => {
        const art = `
%c
 ██╗     ███████╗ ██████╗ 
 ██║     ██╔════╝██╔═══██╗
 ██║     █████╗  ██║   ██║
 ██║     ██╔══╝  ██║   ██║
 ███████╗███████╗╚██████╔╝
 ╚══════╝╚══════╝ ╚═════╝ 
        `;
        console.log(
          art,
          "color: #4580ff; font-family: monospace; font-size: 10px;",
        );
        console.log(
          "%c You found the secret. Not everyone gets this far.",
          "color: #f59e0b; font-style: italic; font-size: 13px;",
        );
        console.log(
          "%c You'd fit right in on a team I'd love to join. Let's talk.",
          "color: #f0f4ff; font-size: 13px; font-weight: 500;",
        );
      },
    });

    // Cleanup on unmount
    return () => {
      delete window.leoHelp;
      delete window.leoStack;
    };
  }, []);

  return null;
}
