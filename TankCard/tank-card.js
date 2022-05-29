const template = document.createElement("template");
template.innerHTML = `


    <div class="tank1_container">
        <div class="card-tank1-image">
            <img class="card-tank1-image-adjust" src="./TankCard/assets/tank2.png" alt="">
        </div>

        <div class="card-tank1-stats">
            <h2 class = "tank-card-location"></h2>
            <h2 class = "tank-card-percentage_full"></h2>
            <h2 class = "tank-card-lat"></h2>
            <h2 class="tank-card-long"></h2>
        </div>

    </div>


`;

class TankCard extends HTMLElement {
    static get observedAttributes(){
        return ["location", "long","lat","percentage_full"];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == "location") {
            this.shadowRoot.querySelector(".tank-card-location").innerHTML = "location: " + newValue;
        }

        if (attrName == "long") {
            this.shadowRoot.querySelector(".tank-card-long").innerHTML = "long: " + newValue;
        }

        if (attrName == "lat") {
            this.shadowRoot.querySelector(".tank-card-lat").innerHTML = "lat: " + newValue;
        }

        if (attrName == "percentage_full") {
            this.shadowRoot.querySelector(".tank-card-percentage_full").innerHTML = "percentage_full: " + newValue;
        }
    }

    constructor(){
        super();

        this.attachShadow({mode: "open"})

        const css = document.createElement("link");
        css.setAttribute("rel", "stylesheet");
        css.setAttribute("href","Tank/tank-card.css");
        this.shadowRoot.appendChild(css);

        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }
}

window.customElements.define("tank-card", TankCard);