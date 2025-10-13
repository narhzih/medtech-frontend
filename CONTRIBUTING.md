# 🤝 Contributing to Medtech Frontend

Thank you for your interest in contributing to **Medtech Frontend**!  
We’re excited to have you on board to help improve this project.

---

## 🧰 Getting Started

1. **Fork the repository**

   ```bash
   git clone https://github.com/your-username/medtech-frontend.git
   cd medtech-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 💻 Development Standards

- Follow **Next.js** and **shadcn/ui** best practices.
- Maintain consistent formatting with **Prettier** and **ESLint**.
- Write clean, readable, and self-documenting code.
- Prefer **functional components** and React hooks.

---

## 🌿 Branch Naming Convention

| Type    | Format                  | Example                    |
| ------- | ----------------------- | -------------------------- |
| Feature | `feature/<description>` | `feature/queue-management` |
| Bugfix  | `fix/<description>`     | `fix/login-token-expiry`   |
| Chore   | `chore/<description>`   | `chore/update-deps`        |
| Docs    | `docs/<description>`    | `docs/update-readme`       |

---

## 🧪 Commit Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format:

```
<type>(scope): short summary

feat(queue): add real-time patient updates
fix(auth): handle token expiration properly
docs(readme): improve setup instructions
```

---

## 🔀 Pull Request Process

1. Create a new branch off `main`.
2. Ensure your code passes linting and type checks:
   ```bash
   npm run lint
   npm run type-check
   ```
3. Commit your changes with a clear message.
4. Push your branch and open a Pull Request.
5. Request a review from a maintainer.
6. Ensure the PR includes a concise description of changes.

---

## 🧩 Testing

If applicable, include relevant tests for new components or logic.  
Use descriptive names and maintain a clean test structure.
For now, we only write tests for things that are actually super important

---

## 💡 Tips

- Check existing issues before opening a new one.
- Link related issues in your PR (e.g., `Fixes #12`).
- Keep pull requests small and focused.
- Use Draft PRs for early feedback.

---

## 🏁 Code of Conduct

We expect all contributors to follow our **Code of Conduct**:  
Be respectful, constructive, and collaborative. Help make this project welcoming for everyone.

---

## ❤️ Final Note

Your contribution helps build a smarter healthcare system.  
Thank you for being part of this mission!
