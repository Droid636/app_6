import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function CalculadoraReactNative() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");

  const parseInputs = () => {
    setError("");
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (a === "" || b === "") {
      setError("Ingresa ambos números.");
      return null;
    }
    if (Number.isNaN(numA) || Number.isNaN(numB)) {
      setError("Los valores deben ser números válidos.");
      return null;
    }
    return { numA, numB };
  };

  const operar = (op) => {
    const parsed = parseInputs();
    if (!parsed) return;
    const { numA, numB } = parsed;

    switch (op) {
      case "+":
        setResultado(numA + numB);
        break;
      case "-":
        setResultado(numA - numB);
        break;
      case "*":
        setResultado(numA * numB);
        break;
      case "/":
        if (numB === 0) {
          setError("No se puede dividir entre 0.");
          setResultado(null);
        } else {
          setResultado(numA / numB);
        }
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora Simple</Text>

      {/* Contenedor del resultado */}
      <View style={styles.resultadoBox}>
        {error ? (
          <Text style={styles.error}>{error}</Text>
        ) : resultado !== null ? (
          <Text style={styles.resultado}>Resultado: {resultado}</Text>
        ) : (
          <Text style={styles.placeholder}>Has una operacion</Text>
        )}
      </View>

      
      <TextInput
        style={styles.input}
        placeholder="Ingresa el primer número"
        keyboardType="numeric"
        value={a}
        onChangeText={setA}
      />

      <TextInput
        style={styles.input}
        placeholder="Ingresa el segundo número"
        keyboardType="numeric"
        value={b}
        onChangeText={setB}
      />

      {/* Botones */}
      <View style={styles.botonesRow}>
        <TouchableOpacity style={styles.boton} onPress={() => operar("+")}>
          <Text style={styles.botonTexto}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton} onPress={() => operar("-")}>
          <Text style={styles.botonTexto}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton} onPress={() => operar("*")}>
          <Text style={styles.botonTexto}>×</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton} onPress={() => operar("/")}>
          <Text style={styles.botonTexto}>÷</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6086acff",
    padding: 20,
  },
  titulo: {
    color:"white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  resultadoBox: {
    minHeight: 60,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    borderRadius: 12,
    marginBottom: 20,
    padding: 10,
  },
  resultado: {
    fontSize: 20,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    fontWeight: "600",
  },
  placeholder: {
    color: "#6b7280",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    backgroundColor: "white",
  },
  botonesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  boton: {
    flex: 1,
    backgroundColor: "#0e56e6ff",
    padding: 15,
    margin: 4,
    color: "white",
    borderRadius: 8,
    alignItems: "center",
  },
  botonTexto: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
