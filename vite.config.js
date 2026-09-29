import { defineConfig } from "vite";
import { resolve } from "path";
import fs from "fs";

const input = {
  main: resolve(process.cwd(), "index.html"),
  about: resolve(process.cwd(), "about.html"),
  products: resolve(process.cwd(), "products.html"),
  blogs: resolve(process.cwd(), "blogs.html"),
  careers: resolve(process.cwd(), "careers.html"),
  contact: resolve(process.cwd(), "contact.html"),

  // Blog article pages — all are in the ROOT folder
  "blog-choosing-right-colours-for-your-home": resolve(
    process.cwd(),
    "choosing-right-colours-for-your-home.html"
  ),

  "blog-finding-colour-direction-for-your-home": resolve(
    process.cwd(),
    "finding-colour-direction-for-your-home.html"
  ),

  "blog-how-to-create-a-smoother-better-looking-finish": resolve(
    process.cwd(),
    "how-to-create-a-smoother-better-looking-finish.html"
  ),

  "blog-preparing-walls-before-painting": resolve(
    process.cwd(),
    "preparing-walls-before-painting.html"
  ),

  "blog-small-changes-that-transform-a-room": resolve(
    process.cwd(),
    "small-changes-that-transform-a-room.html"
  ),

  "blog-why-surface-preparation-matters-before-painting": resolve(
    process.cwd(),
    "why-surface-preparation-matters-before-painting.html"
  )
};

// Automatically add all product HTML pages
const productDir = resolve(process.cwd(), "product");

if (fs.existsSync(productDir)) {
  fs.readdirSync(productDir)
    .filter((file) => file.endsWith(".html"))
    .forEach((file) => {
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