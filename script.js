(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    document.head.appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'xt3ggr-7c.myshopify.com',
      storefrontAccessToken: '956f3c2ff53336487c075ab7b46d72a0',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '15211186782538',
        node: document.getElementById('product-component-1761239048066'),
        moneyFormat: '%7B%7Bamount_with_comma_separator%7D%7D%20kr',
        options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "title": {
                "font-family": "Source Sans Pro, sans-serif",
                "font-size": "20px",
                "color": "#ffffff"
              },
              "button": {
                "font-family": "Droid Sans, sans-serif",
                "font-weight": "bold",
                "font-size": "17px",
                "padding-top": "16.5px",
                "padding-bottom": "16.5px",
                ":hover": {
                  "background-color": "#2c586f"
                },
                "background-color": "#1a3441",
                ":focus": {
                  "background-color": "#2c586f"
                },
                "border-radius": "40px",
                "padding-left": "98px",
                "padding-right": "98px"
              },
              "price": {
                "font-family": "Source Sans Pro, sans-serif",
                "font-size": "20px",
                "color": "#ffffff"
              }
            },
            "buttonDestination": "modal",
            "contents": {
              "options": false
            },
            "width": "580px",
            "text": {
              "button": "Se produktet"
            },
            "googleFonts": [
              "Source Sans Pro",
              "Droid Sans"
            ]
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "font-family": "Droid Sans, sans-serif",
                "font-weight": "bold",
                "font-size": "17px",
                "padding-top": "16.5px",
                "padding-bottom": "16.5px",
                ":hover": {
                  "background-color": "#2c586f"
                },
                "background-color": "#1a3441",
                ":focus": {
                  "background-color": "#2c586f"
                },
                "border-radius": "40px",
                "padding-left": "98px",
                "padding-right": "98px"
              },
              "title": {
                "font-family": "Source Sans Pro, sans-serif",
                "font-weight": "bold",
                "font-size": "26px",
                "color": "#183441"
              },
              "price": {
                "font-family": "Source Sans Pro, sans-serif",
                "font-weight": "bold",
                "font-size": "18px",
                "color": "#183441"
              },
              "description": {
                "font-family": "Source Sans Pro, sans-serif",
                "font-size": "15px",
                "color": "#183441"
              }
            },
            "googleFonts": [
              "Source Sans Pro",
              "Droid Sans"
            ],
            "text": {
              "button": "Tilføj til kurv"
            }
          },
          "cart": {
            "styles": {
              "cart": { "background-color": "#008626" },
              "footer": { "background-color": "#008626" },
              "button": {
                "font-family": "Droid Sans, sans-serif",
                "font-weight": "bold",
                "font-size": "17px",
                "padding-top": "16.5px",
                "padding-bottom": "16.5px",
                "border-radius": "40px",
                "background-color": "#1a3441",
                ":hover": { "background-color": "#2c586f" },
                ":focus": { "background-color": "#2c586f" }
              },
              "title": { "color": "#ffffff" },
              "header": { "color": "#ffffff" },
              "subtotal": { "color": "#ffffff" },
              "currency": { "color": "#ffffff" }
            },
            "text": {
              "title": "Kurv",
              "total": "Subtotal",
              "empty": "Din kurv er tom",
              "notice": "Forsendelse og rabatkoder tilføjes ved betaling.",
              "button": "Betaling"
            }
          }
        }
      });
    });
  }
})();


/* --- Sne-effekt --- */
document.addEventListener("DOMContentLoaded", () => {
  const snowContainer = document.createElement("div");
  snowContainer.classList.add("snow-container");
  document.body.appendChild(snowContainer);

  const numFlakes = 50; // antal snefnug
  for (let i = 0; i < numFlakes; i++) {
    const flake = document.createElement("span");
    flake.classList.add("snowflake");
    flake.innerHTML = "❅";
    flake.style.left = Math.random() * 100 + "vw";
    flake.style.animationDuration = 6 + Math.random() * 6 + "s";
    flake.style.animationDelay = Math.random() * 5 + "s";
    flake.style.fontSize = 10 + Math.random() * 15 + "px";
    flake.style.opacity = 0.5 + Math.random() * 0.5;
    snowContainer.appendChild(flake);
  }
});
