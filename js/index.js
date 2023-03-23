var name = prompt("What is your name?")
capitalName = name.charAt(0).toUpperCase()
name = capitalName+name.slice(1)
alert(name)