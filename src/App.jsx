import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    
    const script = document.createElement("script");
    script.id = "codeGPTWidgetScript";
    script.type = "module";
    script.src = "https://widget.codegpt.co/chat-widget.js";
    script.async = true;
    script.defer = true;
    script.dataset.widgetId = "4dcf2feb-cd3d-4334-aae9-cc0f2e928926";
    
    
    document.body.appendChild(script);

    
    return () => {
      document.body.removeChild(script);
    };
  }, []); 

  return (
    <div>
      <h1>Bienvenidos a la tienda virtual</h1>
    </div>
  );
}

export default App;
