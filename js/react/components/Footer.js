var element = React.createElement(
  "footer",
  null,
  React.createElement(
    "div",
    { className: "footer_navi" },
    React.createElement(
      "ul",
      { className: "clearfix" },
      React.createElement(
        "li",
        null,
        React.createElement(
          "a",
          { href: "index.html" },
          "Home"
        )
      ),
      React.createElement(
        "li",
        null,
        React.createElement(
          "a",
          { href: "category.html" },
          "Category"
        )
      ),
      React.createElement(
        "li",
        null,
        React.createElement(
          "a",
          { href: "staffs_blog.html" },
          "Staffs' Blog"
        )
      ),
      React.createElement(
        "li",
        null,
        React.createElement(
          "a",
          { href: "contact.html" },
          "Contact"
        )
      ),
      React.createElement(
        "li",
        null,
        React.createElement(
          "a",
          { href: "about.html" },
          "About"
        )
      )
    )
  ),
  React.createElement(
    "div",
    { className: "footer_sns" },
    React.createElement(
      "ul",
      { className: "footer_sns_link clearfix" },
      React.createElement(
        "li",
        null,
        React.createElement(
          "a",
          { href: "#" },
          React.createElement("i", { className: "fab fa-facebook-square" })
        )
      ),
      React.createElement(
        "li",
        null,
        React.createElement(
          "a",
          { href: "#" },
          React.createElement("i", { className: "fab fa-twitter" })
        )
      ),
      React.createElement(
        "li",
        null,
        React.createElement(
          "a",
          { href: "#" },
          React.createElement("i", { className: "fab fa-instagram" })
        )
      ),
      React.createElement(
        "li",
        null,
        React.createElement(
          "a",
          { href: "#" },
          React.createElement("i", { className: "fab fa-youtube" })
        )
      )
    )
  ),
  React.createElement(
    "small",
    null,
    "2019 \xA9 Hello_Takako"
  )
);

ReactDOM.render(element, document.getElementById('footer'));