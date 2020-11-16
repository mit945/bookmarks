# Bookmark APP

Link: https://master.d2sidtu7oorqv0.amplifyapp.com/

A single page APP let you create items of link addresses along with datetime and descriptions.

## Application Features

- CRUD (create, read, update, delete) just on one form.
- Personalized with CSS.
- Deployment.

## Tasks

- [x] Design and Implement constructor
- [x] Render HTML template (form, input, labels)
- [x] Map through the array to display input items
- [x] Create CSS template
- [x] Fix deprecated ref attribute with `React.createRef()`
- [x] Deploy on AWS

## Object Structure

```javascript

  constructor(props) {
    super(props);
    this.inputText = React.createRef();
    this.state = {
      title: "Bookmark Lists",
      act: 0,
      index: "",
      datas: [],
    };
  }

```

## License

Copyright (c) 2020 I-han Chang
