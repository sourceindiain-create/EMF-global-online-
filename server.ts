import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  app.get("/api/jobs", (req, res) => {
    const jobs = [
      { id: 1, title: "Software Engineer", company: "EMF Tech", location: "Remote", salary: "$120k - $150k", type: "Full-time" },
      { id: 2, title: "Product Designer", company: "Global Research", location: "New York, NY", salary: "$100k - $130k", type: "Contract" },
      { id: 3, title: "Data Scientist", company: "EMF Global", location: "San Francisco, CA", salary: "$140k - $180k", type: "Full-time" },
      { id: 4, title: "Marketing Manager", company: "Research Hub", location: "London, UK", salary: "£60k - £80k", type: "Full-time" },
    ];
    res.json(jobs);
  });

  app.get("/api/stats", (req, res) => {
    res.json({
      totalUsers: 1254320,
      activeJobs: 45210,
      ruralImpact: 210500,
      certifications: 85400
    });
  });

  app.get("/api/php-starter", (req, res) => {
    const script = `<?php
// EMF Global - Simple Contact Form Backend
// Save this as 'contact.php' on your free hosting

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Please complete the form and try again.";
        exit;
    }

    $recipient = "your-email@example.com";
    $subject = "New contact from $name";
    $email_content = "Name: $name\\n";
    $email_content .= "Email: $email\\n\\n";
    $email_content .= "Message:\\n$message\\n";

    $email_headers = "From: $name <$email>";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
    } else {
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>`;
    res.send(script);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
