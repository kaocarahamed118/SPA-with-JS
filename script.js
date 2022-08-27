const inputs = document.querySelectorAll('.left-sideber input');

function eventHandler(){
    const suffix = this.dataset.size || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(event => event.addEventListener('change', eventHandler))