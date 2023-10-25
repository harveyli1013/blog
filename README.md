# Blog 项目

## 项目结构
```text=project_structure_start
blog/
├── backend/
│   ├── config/
│   │   └── index.ts
│   ├── src/
│   │   ├── constants/
│   │   │   └── code.ts
│   │   ├── middleware/
│   │   │   ├── index.ts
│   │   │   └── responseHeader.ts
│   │   ├── routes/
│   │   │   └── index.ts
│   │   ├── utils/
│   │   │   ├── commonRes.ts
│   │   │   ├── dbConnect.ts
│   │   │   ├── logger.ts
│   │   │   └── silentHandle.ts
│   │   └── app.ts
│   ├── .eslint.js
│   ├── .gitignore
│   ├── .prettierrc.js
│   ├── package.json
│   ├── pnpm-lock.yaml
│   └── tsconfig.json
├── frontend/
│   ├── .gitignore
│   └── .gitkeep
├── .gitignore
├── README.md
├── index.ts
├── package.json
├── pnpm-lock.yaml
└── update.sh
```