import { categories } from "./const.js";
const MAX_DANGER = 1;

class BadCar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */ `
    :host {
        --width: 390px;
        --height: calc(var(--width) * 1.5); /* 550px */
        --border-size: calc(var(--width) / 19.5); /* 20px */
        --color: rgb(202 138 4);
        --dark-color: color-mix(in srgb, var(--color), black 50%);
        --category-gradient: linear-gradient(var(--dark-color), var(--color), var(--dark-color));
        --noise: url("cards/textures/noise.webp");
        --skull-icon: path("M27.16 11.03c0-5.63-4.33-10.24-11.56-10.24-7.22 0-11.2 4.61-11.2 10.24s1.59 4.91 1.59 8.09c0 1.19-1.16.61-1.16 3.18 0 2.82 3.94 2.42 5.09 3.57 1.15 1.16 1.05 3.29 1.05 3.29s.22.87.62.61c0 0 .25.61.54.25 0 0 .29.61.58.11 0 0 .29.69.76.18 0 0 .47.69 1.01.14 0 0 .61.58 1.3.14.69.43 1.3-.14 1.3-.14.54.54 1.01-.14 1.01-.14.47.51.76-.18.76-.18.29.51.58-.11.58-.11.29.36.54-.25.54-.25.4.25.61-.61.61-.61s-.11-2.13 1.05-3.29c1.16-1.15 5.09-.76 5.09-3.58 0-2.56-1.15-1.99-1.15-3.18 0-3.18 1.59-2.46 1.59-8.09zm-17 10.73c-1.94.31-2.82-.23-3.03-1.62-.55-3.62 2.78-4.21 4.44-4.01.79.1 2.17.94 2.17 1.99 0 2.82-1.77 3.36-3.58 3.65m6.67 4.69c-.36 0-.94-.47-.97-1.34-.04.87-.69 1.34-1.05 1.34-.36 0-.9-.36-.94-1.23-.04-.87 1.12-4.37 1.95-4.37.83 0 1.99 3.5 1.95 4.37s-.58 1.23-.94 1.23zm7.51-6.32c-.21 1.39-1.09 1.94-3.03 1.62-1.81-.29-3.58-.83-3.58-3.65 0-1.05 1.37-1.89 2.17-1.99 1.66-.2 5 .39 4.44 4.01z");
    }
    .card-container {
        width: var(--width);
        height: var(--height);
        background-image: url("cards/textures/texture-1.webp"), linear-gradient(#141414, #141414);
        background-blend-mode: overlay, normal;
        background-clip: padding-box, border-box;
        border: var(--border-size) solid transparent;
        border-bottom-width: calc(var(--border-size) * 1.6);
        padding: var(--border-size);
        position: relative;
        display: inline-flex;
        flex-direction: column;

        &::before {
            --offset: calc(var(--border-size) * -1.5);
            content: "";
            border: 1px solid var(--color);
            display: block;
            position: absolute;
            width: calc(100% + var(--border-size));
            height: calc(100% + calc(var(--border-size) * 1.25));
            transform: translate(var(--offset), var(--offset));
            clip-path: polygon(0 0, 100% 0, 100% 100%, 80% 100%, 80% 90%, 20% 90%, 20% 100%, 0 100%);
        }
        &::after {
            content: "";
            background-image: var(--noise);
            mix-blend-mode: overlay;
            inset: 0;
            display: block;
            position: absolute;
            pointer-events: none;
        }
        .image-container,
        .description-container {
            --border-size: 3px;

            width: 88%;
            height: auto;
            margin: 0 auto;
            background:
                linear-gradient(#010011, #010011) padding-box,
                var(--category-gradient) border-box;
            padding: var(--border-size);
            border: var(--border-size) solid transparent;
            display: grid;
            place-items: center;
            user-select: none;
        }
        ::slotted(img) {
            width: 100%;
        }

        .image-container {
            margin-top: 70px;
        }

        .description-container {
            height: 100%;
            position: relative;
            background:
                linear-gradient(#341d14, #1a0f0a) padding-box,
                var(--category-gradient) border-box;
            & ::slotted(p) {
                font-size: 16px;
                color: #ccc;
                padding: 0 1rem;
            }
        }

        header {
            --shape: polygon(5% 0, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%);
            --gradient: linear-gradient(to right, var(--color), #222 30%, #222 70%, var(--color) 100%);
            display: grid;
            place-items: center;
            width: 90%;
            padding: 0.25rem 1rem;
            background: var(--gradient);
            box-sizing: border-box;
            transform: translateY(0.5rem);
            position: absolute;
            z-index: 2;
            top: 1%;

            & .text {
                display: grid;
                grid-template-columns: 4fr 1fr;
                width: calc(100% - 6px);
                height: calc(100% - 6px);
                padding: 0.25rem 1rem;
                background: #1d1d1d;

                & .statistics{
                    color: #fff;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 0.5rem;

                    & .attack, .defense {
                        
                        display: flex;
                        align-items: center;
                        gap: 0.2rem;

                        & p { 
                            font-size: 2rem;
                            margin: 0;
                        }

                    }
                
                }

                & .icons {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    align-items: center;
                    background: #0000;
                    & .icon {
                        width: 32px;
                        height: 32px;
                        opacity: var(--opacity, 0.75);
                        color: #fff;
                        background-image: linear-gradient(45deg, #AE8625, #F7EF8A, #D2AC47, #EDC967);
                        clip-path: var(--shape);
                        &.empty {
                            --opacity: 0.05;
                        }
                    }
                    & .number {
                        font-weight: 800;
                        font-size: 1.25rem;
                        color: #fff;
                        margin-right: 0.5rem;
                    }
                }

                & ::slotted(h1), h1 {
                    margin: 0;
                    font-size: 1.25rem;
                    color: var(--color);
                    padding: 0.4rem 1rem 0.25rem;
                    background: var(--color);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }
            &.description {
                --gradient: linear-gradient(to right, var(--color), #fff5 15%, #fff 50%, var(--color) 85%, #222);
                --shape: polygon(0 0, 100% 0, 97% 50%, 100% 100%, 0 100%, 3% 50%);
                --opacity: 1;
                top: auto;
                bottom: 27%;
                & .text {
                    grid-template-columns: 1fr 50px;
                }
            }

            }
        }

    }
    .num {
        --size: 26px;
        display: grid;
        place-items: center;
        justify-self: end;
        margin-right: 0.5rem;
        border: 2px solid #fff;
        border-radius: 50%;
        font-weight: 800;
        color: #fff;
        background: #000;
        width: var(--size);
        height: var(--size);
        position: absolute;
        bottom: calc(var(--size) * -0.6);
    }
    `;
  }

  connectedCallback() {
    this.render();
  }

  get category() {
    const key = this.getAttribute("category");
    return categories[key]?.name ?? "Desconocida";
  }

  get categoryIcon() {
    const category = this.getAttribute("category");
    return /* html */`<div class="icon" style="--shape: var(--${category}-icon)"></div>`;
  }

  get dangerIcons() {
    const number = Number(this.getAttribute("start")) ?? 0;
    return /* html */`<div class="icons" style="--shape: var(--skull-icon)">
        <div class="number">${number}</div>
        ${"<div class=\"icon\"></div>".repeat(MAX_DANGER)}
    </div>`;
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
        <style>${BadCar.styles}</style>
        <div class="card-container">
            <header class="title">
                <div class="text">
                    <slot name="title"></slot>
                    ${this.dangerIcons}
                </div>
            </header>
            <div class="image-container">
                <slot name="image"></slot>
            </div>
            <header class="description">
                <div class="text" style="display: flex; align-items: center;
                justify-content: space-between;">
                    <h1>${this.category}</h1>
                    <div class="statistics">
                        <div class="attack">
                            <p>&#9876;</p>
                            <slot name="attack"></slot>
                        </div>
                        <div class="defense">
                            <p>&#128737;</p>
                            <slot name="defense"></slot>
                        </div>
                    </div>
                </div>
            </header>
            <div class="description-container">
                <slot name="description"></slot>
            </div>
        </div>
    `;
  }
}

customElements.define("bad-car", BadCar);
