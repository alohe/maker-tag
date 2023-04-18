# Maker tag

![Demo](https://raw.githubusercontent.com/alohe/maker-tag/master/imgs/demo.png)

Maker tag is a customizable HTML and CSS based widget that displays a text tag on a web page. The widget is designed to be added to any website with minimal configuration.

## Usage

To add the Maker tag widget to your website, simply add the following JavaScript code to your web page:

```html
<script src="https://cdn.jsdelivr.net/gh/alohe/maker-tag@1.0.1/dist/mwl.min.js"></script>
```

The widget can be customized by passing an object to the MakerTag constructor. The following code shows the default configuration:


## Configuration

To add the Maker tag widget to your website, simply add the following JavaScript code to your web page:

```html
<script src="https://cdn.jsdelivr.net/gh/alohe/maker-tag@1.0.1/dist/mwl.min.js"></script>
<script>
    new MakerTag({
        text: "Made with ❤️ by Alohe",
        link: "https://twitter.com/alemalohe",
    });
</script>
```

The widget can be customized by passing an object to the MakerTag constructor. The following code shows the default configuration:

```html
<script>
  new MakerTag({
    text: "Made with ❤️ by Alohe",
    link: "https://alohe.github.io",
    position: "bottom-left",
    background: "radial-gradient(circle at left, #FFE2A3 0%, #fff 50%, #FFE2A3 100%)",
    color: "#E59F0D",
    animated: true,
    padding: "10px 20px",
    margin: "10px",
    font: {
        size: "13px",
        weight: "700",
    },
    borderRadius: "13px",
    hover: {
        color: "",
        background: "",
        shadow: "",
    },
    shadow: "none",
  });
</script>
```

| Attribute        | Type    | Description                                                                                                            | Default                         |
| ---------------- | ------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| text             | string  | The text to display in the tag.                                                                                        | "Made with ❤️"                   |
| link             | string  | The link that the tag points to.                                                                                       | "https://twitter.com/alemalohe" |
| color            | string  | The color of the text in the tag.                                                                                      | "white"                         |
| background       | string  | The background of the tag. Can be set to any valid CSS background value. Including gradients!                          | "black"                         |
| margin           | string  | The margin of the tag.                                                                                                 | "20px"                          |
| padding          | string  | The padding of the tag.                                                                                                | "10px 20px"                     |
| font.size        | string  | The font size of the tag.                                                                                              | "0.8rem"                        |
| font.weight      | string  | The font weight of the tag.                                                                                            | "bold"                          |
| borderRadius     | string  | The border radius of the tag.                                                                                          | 0                               |
| position         | string  | The position of the tag. Valid values are "bottom-left", "bottom-right", "top-left", and "top-right".                  | "bottom-left"                   |
| shadow           | string  | The box shadow of the tag.                                                                                             | "0 0 0 rgba(0, 0, 0, 0)"        |
| hover.color      | string  | The text color of the tag on hover.                                                                                    | "white"                         |
| hover.background | string  | The background color of the tag on hover.                                                                              | "black"                         |
| hover.shadow     | string  | The box shadow of the tag on hover.                                                                                    | "0 0 0 rgba(0, 0, 0, 0)"        |
| animated         | boolean | Whether to enable the animated gradient background. Only works if the background attribute is set to a gradient value. | false                           |


## License

This project is licensed under the Apache License 2.0. See the [LICENSE](https://github.com/alohe/maker-tag/blob/master/LICENSE) file for more information.
