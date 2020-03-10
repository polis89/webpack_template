require('../sass/styles.sass')

if (process.env.NODE_ENV !== 'production') console.log('DEVELOPMENT MODE')

function component () {
  var element = document.createElement('div')
  element.innerHTML = 'Hello webpack!'
  return element
}

document.body.appendChild(component())
