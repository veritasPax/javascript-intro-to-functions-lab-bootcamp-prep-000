function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowercase()
}

function logShout(string) {
  if (string.toUpperCase() === string) {
    console.log(string)
  }
}

function logWhisper(string) {
  if (string.toLowercase() === string) {
    console.log(string)
  }
}

function sayHiToGrandma (string) {
  if (string.toUpperCase() === string) {
    return "YES INDEED!"
  } else if (string.toLowercase() === string) {
    return "I can't hear you!"
  } else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}