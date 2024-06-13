### Developer Requirements
#### Tech Stack
- Front-End:
  * TypeScript
  * React
  * Tailwind CSS

- Deployment:
  * This is To Be Announced (TBA)

#### Local Environment Set-up
##### Installation
Use the package manager to install all the dependencies.
```bash
yarn install
```

##### Folder Structure
This is the overview of the folder structure:

```bash
- src
  |- app (root folder)
    |- about (folder)
      |- page.tsx (this is the about page)
    |- contact (folder)
      |- page.tsx (this is the contact page)
    |- girls (folder)
      |- page.tsx (this is the girls page)
     - globals.CSS
     - layout.tsx
     - page.tsx
  |- components (collection folder)
     - footer.tsx
     - navigation.tsx
```


##### Usage
- How to create a new path:
  * if it is a new web page, please add a new folder under "app" folder:

```bash
- src
  |- app (root folder)
    |- "new-folder" (foler)
    |- about (folder)
      |- page.tsx (this is the about page)
    |- contact (folder)
      |- page.tsx (this is the contact page)
    |- girls (folder)
```

![alt-text]()

- How to add a element-component:

  Step 1:
  * if it is a new component to be displayed somewhere on the screen, please add a new file under "component" folder:

```bash
- src
  |- app (root folder)
    |- "new-folder" (foler)
    .
    .
    .
  |- components (collection folder)
     - footer.tsx
     - navigation.tsx
     - "new-component-file.tsx"
```

  Step 2:
  * add the component in the designated web page:
  ```bash
  export default function RootLayout({
     children,
  }: Readonly<{
      children: React.ReactNode;
  }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <"new-component" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

### Contributors
This will be updated soon
