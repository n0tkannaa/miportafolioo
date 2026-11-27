import { ProjectItem } from "@/types";

// =========================================================================
// EDITA AQUÍ TUS 5 PROYECTOS OBLIGATORIOS DE LAS 10 SEMANAS
// Puedes cambiar las imágenes en public/evidencias/ por tus propias capturas
// =========================================================================

export const projects: ProjectItem[] = [
  {
    id: "1",
    slug: "regresion-lineal",
    week: "Semana 3",
    title: "Actividad 1: Regresión Lineal",
    summary:
      "Modelo supervisado en Python para analizar tendencias numéricas y predecir valores continuos.",
    problem:
      "Estimar valores futuros de una variable dependiente a partir de datos históricos minimizando el error de estimación.",
    objective:
      "Implementar, entrenar y evaluar un modelo de regresión lineal y visualizar la recta de ajuste.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
    solution:
      "Se limpió el dataset, se dividieron los datos en entrenamiento y prueba (80/20) y se ajustó el modelo LinearRegression evaluando el Error Cuadrático Medio (MSE) y el coeficiente R².",
    results: [
      "Obtención de ecuación predictiva con ajuste consistente sobre los datos de prueba.",
      "Generación de gráficas comparativas entre valores reales y predichos.",
    ],
    codeSnippet: `import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
modelo = LinearRegression()
modelo.fit(X_train, y_train)

predicciones = modelo.predict(X_test)
print("MSE:", mean_squared_error(y_test, predicciones))
print("R2 Score:", r2_score(y_test, predicciones))`,
    image: "/evidencias/regresion.svg",
    imageCaption: "Gráfica de dispersión y recta de regresión ajustada (reemplaza con tu captura real).",
    repoUrl: "https://github.com/TU-USUARIO/mi-portafolio-digital",
  },
  {
    id: "2",
    slug: "laberinto-arboles-decision",
    week: "Semana 4",
    title: "Actividad 2: Laberinto (Árboles de Decisión)",
    summary:
      "Agente inteligente capaz de navegar un laberinto utilizando reglas de clasificación basadas en árboles de decisión.",
    problem:
      "Determinar automáticamente qué dirección tomar en cada celda de un laberinto evitando muros y callejones sin salida.",
    objective:
      "Entrenar un DecisionTreeClassifier con estados del entorno para encontrar una ruta válida hasta la salida.",
    technologies: ["Python", "Scikit-Learn", "DecisionTreeClassifier", "Matplotlib"],
    solution:
      "Se representaron los estados del laberinto (muros adyacentes y dirección a la meta) para entrenar un árbol de decisión que clasifica la acción óptima en cada paso.",
    results: [
      "Navegación exitosa desde el punto de inicio hasta la salida sin colisiones.",
      "Visualización paso a paso del recorrido y las reglas del árbol.",
    ],
    codeSnippet: `from sklearn.tree import DecisionTreeClassifier

# Características: [muro_arriba, muro_abajo, muro_izq, muro_der, dir_meta]
clf = DecisionTreeClassifier(max_depth=5, criterion="entropy", random_state=42)
clf.fit(X_estados, y_movimientos)

siguiente_paso = clf.predict([estado_actual])[0]
print("Movimiento elegido:", siguiente_paso)`,
    image: "/evidencias/laberinto.svg",
    imageCaption: "Visualización del laberinto y ruta resuelta por el árbol de decisión.",
    repoUrl: "https://github.com/TU-USUARIO/mi-portafolio-digital",
  },
  {
    id: "3",
    slug: "ai-challenge-kmeans-knn",
    week: "AI Challenge",
    title: "Actividad 3: AI Challenge – K-Means y KNN",
    summary:
      "Segmentación de datos sin etiquetar con K-Means y clasificación supervisada con K-Nearest Neighbors.",
    problem:
      "Descubrir grupos naturales en un conjunto de datos sin etiquetas previas y clasificar nuevos registros dentro de dichas categorías.",
    objective:
      "Aplicar K-Means para segmentar los datos y evaluar la precisión de clasificación con KNN.",
    technologies: ["Python", "Scikit-Learn", "KMeans", "KNeighborsClassifier", "Matplotlib"],
    solution:
      "Se normalizaron las variables, se ejecutó K-Means para hallar centroides y con las etiquetas generadas se entrenó un clasificador KNN.",
    results: [
      "Segmentación clara de los datos en clústeres con centroides identificados.",
      "Clasificación precisa de nuevos registros mediante vecinos más cercanos.",
    ],
    codeSnippet: `from sklearn.cluster import KMeans
from sklearn.neighbors import KNeighborsClassifier

kmeans = KMeans(n_clusters=3, random_state=42, n_init="auto")
clusters = kmeans.fit_predict(X_scaled)

knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X_scaled, clusters)
print("Exactitud KNN:", knn.score(X_scaled, clusters))`,
    image: "/evidencias/kmeans.svg",
    imageCaption: "Clústeres y centroides obtenidos con K-Means y clasificados con KNN.",
    repoUrl: "https://github.com/TU-USUARIO/mi-portafolio-digital",
  },
  {
    id: "4",
    slug: "hotspots-comerciales",
    week: "Análisis Espacial",
    title: "Actividad 4: Hotspots Comerciales",
    summary:
      "Identificación de zonas con mayor concentración comercial mediante análisis de datos geoespaciales y KNN/K-Means.",
    problem:
      "Ubicar puntos estratégicos con alta densidad comercial a partir de datos geolocalizados de OpenStreetMap.",
    objective:
      "Procesar coordenadas geográficas y detectar focos (hotspots) comerciales mediante centroides espaciales.",
    technologies: ["Python", "Pandas", "OpenStreetMap", "KNN / K-Means", "HTML / Leaflet"],
    solution:
      "Se depuraron las coordenadas geográficas de comercios y se calcularon centroides de densidad espacial para visualizar los hotspots.",
    results: [
      "Detección de los principales núcleos de concentración comercial.",
      "Generación de mapa interactivo con zonas estratégicas delimitadas.",
    ],
    codeSnippet: `import pandas as pd
from sklearn.cluster import KMeans

coords = df[["latitud", "longitud"]].dropna()
modelo_zonas = KMeans(n_clusters=4, random_state=42, n_init="auto")
df["hotspot_id"] = modelo_zonas.fit_predict(coords)
print(df.groupby("hotspot_id").size())`,
    image: "/evidencias/hotspots.svg",
    imageCaption: "Mapa de concentración y detección de hotspots comerciales.",
    repoUrl: "https://github.com/TU-USUARIO/mi-portafolio-digital",
  },
  {
    id: "5",
    slug: "desarrollo-aplicacion-backend",
    week: "Full-Stack",
    title: "Actividad 5: Aplicación Web y Backend (Next.js)",
    summary:
      "Arquitectura modular en Next.js 14 con App Router, TypeScript, Tailwind CSS y API REST POST /api/contact.",
    problem:
      "Integrar en una sola plataforma profesional la presentación de proyectos de IA y un backend funcional para contacto.",
    objective:
      "Desarrollar frontend responsivo, rutas dinámicas para evidencias y endpoint REST con validaciones en servidor.",
    technologies: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "API REST", "Vercel"],
    solution:
      "Se organizó el proyecto en src/app, src/components y src/data, implementando un Route Handler en /api/contact que valida nombre, correo y mensaje devolviendo respuestas JSON.",
    results: [
      "Interfaz 100% responsiva (móvil, tablet y escritorio) con tema claro/oscuro.",
      "Endpoint POST /api/contact operativo con validación de campos y manejo de errores.",
      "Despliegue continuo en Vercel desde repositorio independiente en GitHub.",
    ],
    codeSnippet: `// src/app/api/contact/route.ts
export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  if (!name || !email || !message) {
    return Response.json({ ok: false, error: "Campos obligatorios" }, { status: 400 });
  }
  return Response.json({ ok: true, message: "Mensaje enviado correctamente" }, { status: 200 });
}`,
    image: "/evidencias/backend.svg",
    imageCaption: "Arquitectura modular de Next.js 14 y flujo del endpoint POST /api/contact.",
    repoUrl: "https://github.com/TU-USUARIO/mi-portafolio-digital",
  },
];
