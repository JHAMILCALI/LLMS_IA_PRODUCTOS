import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    // Crear el elemento de script
    const script = document.createElement("script");
    script.id = "codeGPTWidgetScript";
    script.type = "module";
    script.src = "https://widget.codegpt.co/chat-widget.js";
    script.async = true;
    script.defer = true;
    script.dataset.widgetId = "4dcf2feb-cd3d-4334-aae9-cc0f2e928926";
    
    // Añadir el script al body
    document.body.appendChild(script);

    // Remover el script al desmontar el componente, si es necesario
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Solo se ejecuta una vez al montar el componente

  return (
    <div>
      <h1>Integración CodeGPT en React</h1>
    </div>
  );
}

export default App;
