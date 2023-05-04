// Una funcion que revise si una palabra contiene todas las vocales
// Una funcion que revise si un numero es par
// Una funcion que revise si un numero es primo
// Una funcion que revise el mayor numero en un array
// Una funcion que revise la palabra mas larga en un array
// Una funcion que revise si un numero dado esta dentro de un array

const checkIfHaveAllVowels = (word) => {
  const vowels = ["a", "e", "i", "o", "u"];

  return vowels.every((vowel) => word.includes(vowel));
};
console.log(checkIfHaveAllVowels("murcielago"));
n;
