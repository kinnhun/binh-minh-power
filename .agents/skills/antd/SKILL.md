---
name: antd
description: Ant Design (antd) UI library skill. Provides instructions, API references, best practices, and code snippets for integrating Ant Design components, customizing themes via ConfigProvider, handling forms, and utilizing Ant Design Icons.
---

# ANT DESIGN (ANTD) SKILL

You are an expert frontend developer specialized in building enterprise-grade user interfaces in React using **Ant Design** (antd). Use this skill to implement clean, accessible, and highly customized interfaces.

## CORE PRINCIPLES

1. **Global Theming via ConfigProvider**: Always use `<ConfigProvider>` at the root of the application to customize design tokens (colors, border radiuses, typography) instead of manually overriding CSS classes.
2. **Dynamic Styling (CSS-in-JS)**: Ant Design v5 uses a CSS-in-JS styling engine. Do not force static CSS overrides. Use token-based customization.
3. **Form Best Practices**: Always use Antd's `<Form>` and `<Form.Item>` for complex inputs. Leverage built-in rules, validation states, and hook-based form control (`Form.useForm()`).
4. **Tree Shaking & Bundle Optimization**: Import components directly from `"antd"` (e.g., `import { Button, Table } from "antd"`). Modern bundlers (Vite/Webpack) will automatically tree-shake.

---

## INSTALLATION

```bash
npm install antd @ant-design/icons
```

---

## 1. THEME CUSTOMIZATION (ConfigProvider)

Use `ConfigProvider` to customize components globally using **Design Tokens**.

```tsx
import React from "react";
import { ConfigProvider, Button } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#F8B914",      // Solar Gold
          colorBgBase: "#FFF8E1",        // Cream Base
          colorTextBase: "#3D2900",      // Deep Brown Text
          borderRadius: 4,
          fontFamily: "Calibri, sans-serif",
        },
        components: {
          Button: {
            colorPrimaryHover: "#FFF8E1",
            colorPrimaryActive: "#E8A010",
          },
        },
      }}
    >
      <div className="container">
        <Button type="primary">BMC Primary Button</Button>
      </div>
    </ConfigProvider>
  );
}
```

---

## 2. ANTD FORMS & VALIDATION

Use `Form.useForm()` to control form fields imperatively and validate input fields declaratively.

```tsx
import React from "react";
import { Form, Input, Button, message } from "antd";

interface FieldType {
  email?: string;
  password?: string;
}

function LoginForm() {
  const [form] = Form.useForm();

  const onFinish = (values: FieldType) => {
    message.success("Logged in successfully!");
    console.log("Success:", values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
      style={{ maxWidth: 400 }}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please input your email!" },
          { type: "email", message: "Please enter a valid email address!" }
        ]}
      >
        <Input placeholder="Enter your business email" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
}
```

---

## 3. ANT DESIGN ICONS

Always import icons individually from `@ant-design/icons`.

```tsx
import { SearchOutlined, CheckCircleFilled, ExclamationCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";

function IconButton() {
  return (
    <Button type="primary" icon={<SearchOutlined />}>
      Search Projects
    </Button>
  );
}
```

---

## 4. DESIGN TOKEN USAGE IN STYLES

If you need to use theme variables in custom styles, use `theme.useToken()`:

```tsx
import React from "react";
import { theme } from "antd";

function CustomCard() {
  const { token } = theme.useToken();

  return (
    <div style={{ 
      backgroundColor: token.colorBgContainer, 
      color: token.colorText,
      padding: token.paddingMD,
      borderRadius: token.borderRadiusLG,
      border: `1px solid ${token.colorBorder}`
    }}>
      Custom styled card using Ant Design token variables.
    </div>
  );
}
```
