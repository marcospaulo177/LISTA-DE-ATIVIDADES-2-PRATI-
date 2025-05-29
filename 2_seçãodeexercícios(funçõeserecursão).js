//4. Fatorial Recursivo
function fatorial(n) {
  if (n < 0) {
    throw new Error("Fatorial não é definido para números negativos");
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

// Exemplos de uso:
console.log(fatorial(5)); // 120
console.log(fatorial(3)); // 6
console.log(fatorial(0)); // 1

try {
  console.log(fatorial(-1));
} catch (error) {
  console.error(error.message);
}



//5. Debounce

function debounce(fn, delay) {
  let timeoutId;

  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

// Exemplo de uso:
function logarMensagem(mensagem) {
  console.log(mensagem);
}

const debouncedLogarMensagem = debounce(logarMensagem, 500);

debouncedLogarMensagem("Mensagem 1");
debouncedLogarMensagem("Mensagem 2");
debouncedLogarMensagem("Mensagem 3");

// Só a última mensagem será logada após 500ms

//6. Memoization

function memoize(fn) {
  const cache = {};

  return function(...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;

    return result;
  };
}

// Exemplo de uso:
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);

console.time("Primeira chamada");
console.log(memoizedFibonacci(30));
console.timeEnd("Primeira chamada");

console.time("Segunda chamada");
console.log(memoizedFibonacci(30));
console.timeEnd("Segunda chamada");

