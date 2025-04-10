import { createContext, useState, useEffect } from "react";

// Creamos el contexto de autenticación
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);

    // Cargar usuario de localStorage al iniciar
    useEffect(() => {
        const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
        if (usuarioGuardado) {
            setUsuario(usuarioGuardado);
        }
    }, []);

    // Simulación de login (esto se reemplazará por una API en el futuro)
    const login = (email, password) => {
        const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];
        const usuarioEncontrado = usuariosGuardados.find(u => u.email === email && u.contrasena === password);

        if (usuarioEncontrado) {
            setUsuario(usuarioEncontrado);
            localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado)); // Guardar sesión
            return usuarioEncontrado;
        }

        return null;
    };

    // Cerrar sesión
    const logout = () => {
        setUsuario(null);
        localStorage.removeItem("usuario");
    };

    // Función para registrar un nuevo usuario
    const registrarUsuario = (nuevoUsuario) => {
        const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];
        
        // Verificar si el email ya está registrado
        if (usuariosGuardados.some(u => u.email === nuevoUsuario.email)) {
            alert("El correo ya está registrado.");
            return false;
        }

        // Agregar nuevo usuario
        const nuevosUsuarios = [...usuariosGuardados, nuevoUsuario];
        localStorage.setItem("usuarios", JSON.stringify(nuevosUsuarios));

        // Iniciar sesión automáticamente después de registrarse
        setUsuario(nuevoUsuario);
        localStorage.setItem("usuario", JSON.stringify(nuevoUsuario));

        return true;
    };

    return (
        <AuthContext.Provider value={{ usuario, setUsuario, login, logout, registrarUsuario }}>
            {children}
        </AuthContext.Provider>
    );
};
