import { defineConfig } from "vite";
import { resolve } from "path";
import fs from "fs";

const input = {
  main: resolve(process.cwd(), "index.html"),
  about: resolve(process.cwd(), "about.html"),
  products: resolve(process.cwd(), "products.html"),
  blogs: resolve(process.cwd(), "blogs.html"),
  careers: resolve(process.cwd(), "careers.html"),
  contact: resolve(process.cwd(), "contact.html")
};

// Automatically add all product HTML pages
const productDir = resolve(process.cwd(), "product");

if (fs.existsSync(productDir)) {
  fs.readdirSync(productDir)
    .filter(file => file.endsWith(".html"))
    .forEach(file => {
      const name = file.replace(".html", "");

      input[`product-${name}`] = resolve(
        productDir,
        file
      );
    });
}

export default defineConfig({
  build: {
    rollupOptions: {
      input
    }
  }
});