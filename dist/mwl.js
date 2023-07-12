class MakerTag {
  constructor({
    text = "Made with ❤️ by Alohe",
    link = "https://alohe.github.io",
    position = "bottom-left",
    background = "radial-gradient(circle at left, #FFE2A3 0%, #fff 50%, #FFE2A3 100%)",
    color = "#E59F0D",
    padding = "10px 20px",
    margin = "10px",
    font = {
      size: "13px",
      weight: "700",
    },
    borderRadius = "13px",
    hover = {
      color: "",
      background: "",
      shadow: "",
    },
    shadow = "none",
    animated = true,
  }) {
    this.tagText = text;
    this.tagLink = link;
    this.tagPosition = position;
    this.background = background;
    this.textColor = color;
    this.animated = animated;
    this.padding = padding;
    this.margin = margin;
    this.font = font;
    this.borderRadius = borderRadius;
    this.shadow = shadow;
    this.hover = hover;
    this.createWidget();
  }

  createWidget() {
    const css = `
            @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap");
            .maker__tag {
              position: fixed;
              z-index: 999999999999999999999999999999999999;
              font-size: 0.8em;
              background: ${this.background};
              padding: ${this.padding};
              font-size: 0.8em;
              font-weight: 700;
              font-family: "Inter";
              border-radius: ${this.borderRadius};
              text-decoration: none;
              ${this.animated ? `animation: shine 5s infinite linear;` : ""}
              background-size: 200% auto;
              transition: 0.5s;
              cursor: pointer;
              box-shadow: ${this.shadow};
            }
            .maker__tag:hover{
                background: ${this.hover.background};
                color: ${this.hover.color};
                box-shadow: ${this.hover.shadow};
                transform: scale(0.95);
            }
            .maker__tag:active{
                background: ${this.hover.background};
                color: ${this.hover.color};
                box-shadow: ${this.hover.shadow};
                transform: scale(0.90);
            }
            .maker__tag.maker__tag__position--bottom-right {
              bottom: ${this.margin};
              right: ${this.margin};
            }
            .maker__tag.maker__tag__position--bottom-left {
              bottom: ${this.margin};
              left: ${this.margin};
            }
            .maker__tag.maker__tag__position--top-right {
              top: ${this.margin};
              right: ${this.margin};
            }
            .maker__tag.maker__tag__position--top-left {
              top: ${this.margin};
              left: ${this.margin};
            }
            .maker__tag.maker__tag__position--top-center {
              top: ${this.margin};
              left: 50%;
              transform: translateX(-50%);
            }
            .maker__tag.maker__tag__position--bottom-center {
              bottom: ${this.margin};
              left: 50%;
              transform: translateX(-50%);
            }
            @keyframes shine {
              100% {
                background-position: -200%;
              }
            }
            .made__by__text {
              padding: 0;
              margin: 0;
              color: ${this.textColor};
              font-size: ${this.font.size};
              font-weight: ${this.font.weight};
            }
            .made__by__link {
              color: ${this.textColor};
              text-decoration: none;
            }
            .maker__tag:hover .made__by__text {
              color: ${this.hover.color};
            }
            .maker__tag:hover .made__by__link {
              color: ${this.hover.color};
            }
          `;

    const head = document.head || document.getElementsByTagName("head")[0];
    const style = document.createElement("style");

    head.appendChild(style);

    style.type = "text/css";
    if (style.styleSheet) {
      // This is required for IE8 and below.
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    // Create a div element to hold the widget
    const widgetDiv = document.createElement("div");
    widgetDiv.className = `maker__tag maker__tag__position--${this.tagPosition}`;

    // Create an anchor element to hold the "made by" text
    const anchorElem = document.createElement("a");
    anchorElem.href = this.tagLink;
    anchorElem.className = "made__by__link";
    anchorElem.target = "_blank";

    // Create a paragraph element to hold the "made by" text
    const paragraphElem = document.createElement("p");
    paragraphElem.className = "made__by__text";
    paragraphElem.innerHTML = this.tagText;

    // Append the paragraph element to the anchor element
    anchorElem.appendChild(paragraphElem);

    // Append the anchor element to the widget div
    widgetDiv.appendChild(anchorElem);

    // Append the widget div to the document body
    document.body.appendChild(widgetDiv);
  }

  // Create and append the widget to the document body
  render() {
    const widgetDiv = document.createElement("div");
    widgetDiv.className = `maker__tag maker__tag__position--${this.options.tagPosition}`;

    const anchorElem = document.createElement("a");
    anchorElem.href = this.options.tagLink;
    anchorElem.className = "made__by__link";
    anchorElem.target = "_blank";

    const paragraphElem = document.createElement("p");
    paragraphElem.className = "made__by__text";
    paragraphElem.textContent = this.options.tagText;

    anchorElem.appendChild(paragraphElem);
    widgetDiv.appendChild(anchorElem);
    document.body.appendChild(widgetDiv);
  }
}
