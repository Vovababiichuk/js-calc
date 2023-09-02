function updateClock() {
  const clockElement = document.getElementById('clock')
  const currentTime = new Date()
  const hours = currentTime.getHours()
  const minutes = currentTime.getMinutes()
  const seconds = currentTime.getSeconds()
  const time = `${hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`

  clockElement.textContent = time
}

setInterval(updateClock, 1000)

class Calc {
  static #value = ''
  static #NAME = 'calc'
  static #isDot = false

  static add = (newValue) => {
    if (isNaN(this.#value[this.#value.length - 2])) {
      if (
        Number(this.#value[this.#value.length - 1]) === 0 &&
        this.#isDot == false
      ) {
        return null
      }
    }

    this.#value = this.#value.concat(newValue)
    this.#output()
  }

  static #output = () => {
    this.#save()
    const outputElement = document.getElementById('output')
    if (outputElement) {
      outputElement.value = this.#value
    }
  }

  static dot = () => {
    if (this.#isDot) {
      return null
    }

    if (isNaN(this.#value[this.#value.length - 1])) {
      return null
    }

    this.#value = this.#value.concat('.')
    this.#output()
    this.#isDot = true
  }

  static op = (operationValue) => {
    if (isNaN(this.#value[this.#value.length - 1])) {
      return null
    }

    this.#value = this.#value.concat(operationValue)

    this.#output()
    this.#isDot = false
  }

  static reset = () => {
    window.output.value = ''
    this.#value = ''
    this.#isDot = false
    this.#save()
  }

  static result = () => {
    if (this.#value === '') {
      alert('Enter value')
      return null
    }

    this.#value = String(eval(this.#value))
    this.#output()
    this.#save()
  }

  static delete = () => {
    if (this.#value.length > 0) {
      this.#value = this.#value.slice(0, -1)
      this.#output()
    }
  }

  static calcPercent = () => {
    if (this.#value.length > 0 && !isNaN(this.#value)) {
      const result = parseFloat(this.#value) / 100
      this.#value = result.toString()
      this.#output()
    }
  }

  static toggleSign = () => {
    if (this.#value.length > 0 && !isNaN(this.#value)) {
      const currentValue = parseFloat(this.#value)
      this.#value = (-currentValue).toString()
      this.#output()
    }
  }

  static #save = () => {
    window.localStorage.setItem(this.#NAME, this.#value)
  }

  static #load = () => {
    return window.localStorage.getItem(this.#NAME) || ''
  }

  static init = () => {
    this.#value = this.#load()
    this.#output()
    console.log('Calc is init')
  }
}

document.addEventListener('DOMContentLoaded', function () {
  Calc.init();
});

// в середині window в будь-яку нашу властивість ми кладемо наш class Calc
window.calc = Calc


const audio = document.getElementById("myAudio");

window.addEventListener("load", () => {
  audio.play();
});



// // script.js
// document.addEventListener("DOMContentLoaded", function () {
//   // Час затримки в мілісекундах (наприклад, 2000 мс = 2 секунди)
//   var delay = 2500;

//   // Відображення preloader
//   var preloader = document.querySelector(".preloader");
//   preloader.style.display = "block";

//   // Приховання preloader після затримки
//   setTimeout(function () {
//       preloader.style.display = "none";

//       // Відображення контенту після завантаження сторінки
//       var content = document.querySelector(".wrapper");
//       content.style.display = "block";
//   }, delay);
// });

// Чекаємо завантаження сторінки
window.onload = function () {
  // Відображення preloader
  var preloader = document.querySelector(".preloader");
  preloader.style.display = "block";

  // Приховуємо preloader після затримки
  setTimeout(function () {
    preloader.style.display = "none";

    // Відображення контенту після завантаження сторінки
    var content = document.querySelector(".wrapper");
    content.style.display = "block";
  }, 2500); // Затримка 2.5 секунди (як ви вказали у вашому коді)
};






