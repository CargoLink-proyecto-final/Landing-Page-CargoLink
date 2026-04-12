Sistema de Gestión Logística para Transporte de Cargas, CargoLink 

Integrantes
Barrale Simón 
Frias Manuel
Monzo Vicente
Introducción
En el sector del transporte de cargas en Argentina, es frecuente que los camiones realicen viajes de ida con mercancía, pero regresen vacíos, generando pérdidas económicas y un uso ineficiente de los recursos logísticos. A su vez, muchas empresas y transportistas no cuentan con herramientas digitales centralizadas que les permitan coordinar envíos, gestionar cargas y optimizar la asignación de transporte. Esta falta de integración provoca problemas de organización, baja visibilidad de oportunidades y mayores costos operativos.
Frente a esta problemática, se propone el desarrollo de CargoLink, un sistema de gestión logística que conecta transportistas con capacidad disponible y usuarios que necesitan enviar mercancías. La plataforma permitirá publicar rutas y cargas, generar coincidencias entre ambas partes y gestionar los envíos de manera eficiente. De esta forma, se busca reducir los viajes en vacío, mejorar la utilización de los vehículos y optimizar el funcionamiento del sistema logístico.

Objetivos 
Objetivo General
Desarrollar una plataforma digital de gestión logística que permita conectar transportistas con usuarios que necesitan enviar cargas, optimizando la asignación de viajes y reduciendo los recorridos en vacío, mediante un sistema que gestione publicaciones de rutas, cargas y seguimiento de envíos, incorporando mecanismos de validación de usuarios y control de operaciones.

Objetivos Específicos
● Desarrollar un sistema de registro e inicio de sesión que contemple distintos tipos de usuarios: choferes, usuarios particulares y empresas.
● Implementar perfiles diferenciados:
Perfil de chofer: podrá publicar rutas, gestionar viajes y recibir solicitudes.


Perfil de usuario particular: podrá publicar cargas y solicitar transporte.


Perfil de empresa: podrá gestionar múltiples cargas, visualizar el estado de los envíos y administrar operaciones logísticas.


● Incorporar un mecanismo de validación de identidad de los choferes mediante documentación personal (DNI) y verificación de antecedentes, incluyendo controles relacionados con organismos como AFIP/ARCA, con el fin de garantizar la confiabilidad del sistema.
● Desarrollar funcionalidades para la publicación y gestión de rutas por parte de los transportistas, incluyendo origen, destino, capacidad y fechas.
● Implementar un sistema para la publicación y gestión de cargas por parte de usuarios y empresas, detallando características como tipo de mercadería, peso y ubicación.
● Desarrollar un sistema de matching que permita vincular rutas disponibles con cargas compatibles según ubicación, capacidad y tiempo.
● Implementar un sistema de seguimiento de envíos que permita visualizar el estado de cada transporte (pendiente, en curso, finalizado).
● Desarrollar funcionalidades específicas para empresas que permitan visualizar el estado de sus cargas, historial de envíos y control de operaciones logísticas.
● Implementar un sistema de métricas que permita analizar el uso de la plataforma y la eficiencia logística.
● Desarrollar paneles de visualización (dashboard) para que administradores y empresas puedan interpretar los datos.
● Utilizar las métricas obtenidas para evaluar el rendimiento del sistema y detectar oportunidades de mejora
● Crear una base de datos que almacene información de usuarios, rutas, cargas y viajes, garantizando la integridad y disponibilidad de los datos.
● Diseñar una interfaz de usuario intuitiva que facilite la interacción entre los distintos tipos de usuarios.
● Realizar pruebas funcionales e integrales del sistema para asegurar su correcto funcionamiento.


Alcance
Alcance del Proyecto
El proyecto contempla el desarrollo de un sistema de gestión logística (CargoLink) que permita administrar de manera integral el transporte de cargas, conectando transportistas con usuarios (particulares y empresas), y brindando herramientas para la planificación, asignación, seguimiento y análisis de operaciones logísticas.
El desarrollo se realizará de forma incremental, comenzando por un MVP (Producto Mínimo Viable) que permita validar las funcionalidades principales del sistema.

Alcance del proyecto incluye:
Desarrollo de un sistema de registro e inicio de sesión con distintos tipos de usuarios (chofer, particular y empresa).


Implementación de perfiles diferenciados:


Perfil chofer


Perfil usuario particular


Perfil empresa (con gestión de múltiples cargas y visualización de operaciones)


Implementación de un módulo de validación de usuarios, incluyendo carga de documentación y verificación básica (DNI y controles asociados a AFIP/ARCA).


Desarrollo de funcionalidades para la publicación y gestión de rutas por parte de los transportistas.


Desarrollo de funcionalidades para la publicación y gestión de cargas por parte de usuarios y empresas.


Implementación de un sistema de asignación (matching) entre rutas y cargas.


Desarrollo de un sistema de gestión de viajes, incluyendo:


solicitudes


aceptación/rechazo


estados del viaje (pendiente, en curso, finalizado)


Implementación de herramientas de seguimiento de operaciones logísticas.


Desarrollo de funcionalidades específicas para empresas que permitan gestionar y monitorear sus envíos.


Implementación de un módulo de métricas e indicadores que permita analizar el rendimiento del sistema logístico.


Desarrollo de una interfaz de usuario funcional (web o móvil).


Pruebas funcionales, de integración y validación del sistema.



Fuera del alcance del proyecto
Integración real y directa con sistemas externos de organismos como AFIP/ARCA (solo simulación o validación básica).


Implementación de algoritmos avanzados de optimización logística o inteligencia artificial.


Integración con sistemas empresariales externos (ERP, TMS).


Implementación de seguimiento en tiempo real mediante GPS.


Sistemas de pagos en producción completamente integrados.



Alcance del Producto
El producto esperado es un sistema de gestión logística funcional, desarrollado en etapas.
Primera etapa (MVP):
Registro de usuarios


Publicación de rutas y cargas


Matching básico


Gestión de viajes


Visualización simple de operaciones


Etapas posteriores:
Módulo de métricas y análisis avanzado
Funcionalidades extendidas para empresas
Mejora en la gestión de operaciones
Escalabilidad del sistema
Validación de cargas, empresas y personas
Seguimiento en tiempo real de viajes






































Casos de uso 

CU-01: Publicar Carga
Actor: Usuario particular / Empresa 
Objetivo: Registrar una solicitud de transporte para que choferes disponibles puedan verla y postularse.
Precondiciones:
El usuario tiene sesión iniciada y su perfil está completo.
Escenario Principal:
El usuario accede a "Mis Cargas" y selecciona "Nueva Carga".
El sistema presenta el formulario correspondiente.
El usuario completa tipo de mercadería, peso, origen, destino y fecha estimada de despacho.
El usuario confirma la publicación.
El sistema valida que los datos sean coherentes (peso mayor a 0, origen ≠ destino, fecha válida).
El sistema registra la carga con estado "pendiente" y la publica para que los choferes puedan verla.
El sistema muestra confirmación al usuario.
Flujos Alternativos:
Paso 5 – Datos inválidos: El sistema informa el error específico y no registra la carga hasta que se corrija.
Paso 5 – Campos incompletos: El sistema resalta los campos faltantes y solicita completarlos.
Postcondiciones:
La carga queda registrada con estado "pendiente" y visible para los choferes habilitados.

CU-02: Buscar Cargas Disponibles
Actor: Chofer
Objetivo: Explorar las cargas publicadas para encontrar una que se ajuste a su disponibilidad y zona.
Precondiciones:
El chofer tiene sesión iniciada y su identidad está validada.
Escenario Principal:
El chofer accede a la sección "Cargas Disponibles".
El sistema muestra el listado de cargas con estado "pendiente", ordenadas por fecha de publicación.
El chofer aplica filtros: origen, destino, tipo de mercadería o rango de fechas.
El sistema actualiza el listado según los filtros aplicados.
El chofer selecciona una carga para ver su detalle completo.
El sistema muestra la información completa de la carga y las opciones disponibles.
Flujos Alternativos:
Paso 4 – Sin resultados: El sistema informa que no hay cargas disponibles para los filtros seleccionados y sugiere ampliar los criterios de búsqueda.
Postcondiciones:
No se modifica ningún dato. El chofer obtiene la información necesaria para decidir si postularse.

CU-03: Postularse a una Carga
Actor: Chofer
Objetivo: Manifestar interés en transportar una carga específica para que el usuario pueda aceptar o rechazar la oferta.
Precondiciones:
El chofer tiene sesión iniciada y su identidad está validada.
La carga seleccionada tiene estado "pendiente".
El chofer no se ha postulado previamente a esa misma carga.
Escenario Principal:
Desde el detalle de una carga, el chofer selecciona "Postularme".
El sistema solicita que el chofer ingrese información complementaria: fecha estimada de retiro y cualquier observación relevante.
El chofer completa los datos y confirma la postulación.
El sistema registra la postulación y notifica al usuario dueño de la carga.
El sistema muestra al chofer un mensaje de confirmación indicando que su postulación está pendiente de respuesta.
Flujos Alternativos:
Paso 1 – La carga ya fue asignada: El sistema informa que la carga ya no está disponible y no permite la postulación.
Paso 3 – El chofer ya se postuló: El sistema informa que ya existe una postulación activa del mismo chofer para esa carga.
Postcondiciones:
La postulación queda registrada y el usuario recibe una notificación para gestionarla.

CU-04: Gestionar Postulación de Chofer
Actor: Usuario particular / Empresa
Objetivo: Revisar las postulaciones recibidas para una carga y aceptar o rechazar a un chofer.
Precondiciones:
El usuario tiene sesión iniciada.
La carga tiene al menos una postulación con estado "pendiente".
Escenario Principal:
El usuario accede a "Mis Cargas" y selecciona una carga con postulaciones.
El sistema muestra el listado de choferes postulados con su información de perfil y condiciones ofrecidas.
El usuario revisa el detalle de un chofer y selecciona "Aceptar".
El sistema actualiza el estado de la carga a "asignada" y el del viaje a "en curso".
El sistema notifica al chofer aceptado y rechaza automáticamente las postulaciones restantes.
Flujos Alternativos:
Paso 3 – El usuario rechaza: El sistema registra el rechazo, notifica al chofer y mantiene la carga disponible para las demás postulaciones.
Paso 3 – Sin más postulaciones tras rechazar todas: La carga vuelve al estado "pendiente" sin postulantes.
Postcondiciones:
Si se acepta: el viaje queda registrado vinculando la carga, el chofer y el usuario, con estado "en curso".
Si se rechazan todas: la carga permanece "pendiente" a la espera de nuevas postulaciones.

CU-05: Seguimiento de Envío
Actor: Usuario particular / Empresa 
Objetivo: Consultar el estado actual de uno o más envíos para conocer su progreso.
Precondiciones:
El usuario tiene sesión iniciada.
El usuario tiene al menos un envío registrado en el sistema.
Escenario Principal:
El usuario accede a la sección "Mis Envíos".
El sistema muestra el listado de envíos con su estado actual (pendiente, en curso, finalizado).
El usuario selecciona un envío específico.
El sistema despliega el detalle: datos de la carga, chofer asignado y estado del viaje.
El usuario visualiza la información y cierra la vista de detalle.
Flujos Alternativos:
Paso 2 – Sin envíos registrados: El sistema informa que el usuario no tiene envíos activos y ofrece la opción de publicar una carga.
Paso 4 – Envío finalizado: El sistema muestra adicionalmente la fecha de entrega confirmada e invita al usuario a calificar el servicio.
Postcondiciones:
No se modifica ningún dato. El estado del envío permanece sin cambios.
CU-06: Registrarse en la Plataforma
Actor: Visitante (futuro usuario particular, empresa o chofer) Sistema: CargoLink Objetivo: Crear una cuenta en la plataforma eligiendo el tipo de perfil correspondiente.
Precondiciones:
El visitante no tiene cuenta registrada en el sistema.
El visitante dispone de un correo electrónico válido.
Escenario Principal:
El visitante accede a la pantalla de registro.
El sistema solicita seleccionar el tipo de perfil: chofer, usuario particular o empresa.
El visitante selecciona su tipo de perfil y completa los datos requeridos (nombre, correo, contraseña y datos específicos según perfil).
El visitante confirma el registro.
El sistema valida que el correo no esté registrado previamente y que los campos sean correctos.
El sistema crea la cuenta y envía un correo de verificación.
El visitante verifica su correo y el sistema habilita la cuenta.
Flujos Alternativos:
Paso 5 – Correo ya registrado: El sistema informa que ya existe una cuenta con ese correo y sugiere iniciar sesión.
Paso 5 – Datos inválidos: El sistema resalta los campos incorrectos y solicita corregirlos.
Paso 7 – El usuario no verifica el correo: La cuenta permanece inactiva hasta que se complete la verificación.
Postcondiciones:
La cuenta queda creada y habilitada en el sistema con el perfil seleccionado.

CU-07: Iniciar Sesión
Actor: Usuario registrado (chofer, particular o empresa) 
Objetivo: Autenticarse en la plataforma para acceder a las funcionalidades de su perfil.
Precondiciones:
El usuario tiene una cuenta registrada y verificada.
Escenario Principal:
El usuario accede a la pantalla de inicio de sesión.
El sistema solicita correo y contraseña.
El usuario ingresa sus credenciales y confirma.
El sistema valida las credenciales contra la base de datos.
El sistema redirige al usuario a su panel según su tipo de perfil.
Flujos Alternativos:
Paso 4 – Credenciales incorrectas: El sistema informa el error y permite reintentar. Tras 5 intentos fallidos, bloquea el acceso temporalmente.
Paso 4 – Cuenta no verificada: El sistema informa que la cuenta no fue verificada y ofrece reenviar el correo de verificación.
Paso 4 – Cuenta suspendida: El sistema informa que la cuenta está suspendida y sugiere contactar soporte.
Postcondiciones:
El usuario accede autenticado a su panel personalizado.

CU-08: Ver Historial de Viajes
Actor: Usuario particular / Empresa / Chofer 
Objetivo: Consultar el registro de todos los viajes realizados, tanto pasados como activos.
Precondiciones:
El usuario tiene sesión iniciada.
El usuario tiene al menos un viaje registrado en el sistema.
Escenario Principal:
El usuario accede a la sección "Historial de Viajes".
El sistema muestra el listado de viajes ordenados por fecha descendente, con estado (pendiente, en curso, finalizado) y datos principales.
El usuario aplica filtros opcionales: rango de fechas, estado del viaje u origen/destino.
El sistema actualiza el listado según los filtros aplicados.
El usuario selecciona un viaje para ver su detalle completo.
El sistema muestra información completa: carga, chofer o usuario contraparte, fechas, ruta y estado final.
Flujos Alternativos:
Paso 2 – Sin viajes registrados: El sistema informa que no hay historial disponible aún.
Paso 4 – Sin resultados para los filtros: El sistema informa que no hay viajes que coincidan y sugiere ampliar los criterios.
Postcondiciones:
No se modifica ningún dato. El usuario obtiene la información histórica solicitada.

CU-09: Valorar Chofer o Empresa
Actor: Usuario particular / Empresa (valora al chofer) / Chofer (valora a la empresa o carga) Objetivo: Registrar una calificación y comentario sobre la contraparte una vez finalizado un viaje.
Precondiciones:
El usuario tiene sesión iniciada.
El viaje asociado tiene estado "finalizado".
El usuario no ha valorado previamente ese viaje.
Escenario Principal:
El sistema notifica al usuario que tiene un viaje finalizado pendiente de valoración.
El usuario accede a la valoración desde la notificación o desde el historial.
El sistema muestra el formulario de valoración: puntaje (1 a 5 estrellas) y comentario opcional.
El usuario completa la valoración y confirma.
El sistema registra la valoración y actualiza el puntaje promedio de la contraparte.
El sistema confirma que la valoración fue enviada correctamente.
Flujos Alternativos:
Paso 4 – Sin puntaje seleccionado: El sistema informa que el puntaje es obligatorio y no permite confirmar sin él.
Paso 2 – Valoración ya realizada: El sistema informa que ese viaje ya fue valorado y muestra la calificación emitida.
Postcondiciones:
La valoración queda registrada y el puntaje promedio del chofer o empresa se actualiza en el sistema.

CU-10: Consultar Métricas por Camión / Chofer / Empresa
Actor: Administrador / Empresa / Chofer
Objetivo: Analizar indicadores de rendimiento operativo para evaluar eficiencia y detectar oportunidades de mejora.
Precondiciones:
El usuario tiene sesión iniciada con perfil habilitado para ver métricas (administrador, empresa o chofer sobre sus propios datos).
Existe información histórica suficiente para generar los indicadores.
Escenario Principal:
El usuario accede al panel de métricas.
El sistema presenta las métricas disponibles según el perfil: viajes realizados, cargas transportadas, puntaje promedio, viajes cancelados, entre otras.
El usuario aplica filtros: rango de fechas, chofer específico, empresa o camión.
El sistema actualiza los gráficos e indicadores según los filtros aplicados.
El usuario analiza la información presentada en el dashboard.
Flujos Alternativos:
Paso 2 – Datos insuficientes: El sistema informa que aún no hay datos suficientes para generar métricas y sugiere cuándo estarán disponibles.
Paso 3 – Filtro sin resultados: El sistema informa que no hay datos para esa combinación de filtros.
Postcondiciones:
No se modifica ningún dato. El sistema solo presenta información agregada para la toma de decisiones.

CU-11: Validar Identidad de Chofer
Actor: Chofer / Administrador 
Objetivo: Verificar la documentación del chofer para habilitarlo a operar en la plataforma.
Precondiciones:
El chofer tiene sesión iniciada y su cuenta está creada.
El chofer aún no fue validado.
Escenario Principal:
El sistema solicita al chofer completar el proceso de validación antes de acceder a las funciones operativas.
El chofer accede al módulo de validación y carga los documentos requeridos: DNI (frente y dorso) y documentación del vehículo.
El sistema confirma la recepción de los documentos y cambia el estado del perfil a "en revisión".
El administrador revisa la documentación cargada y realiza las verificaciones básicas (controles asociados a AFIP/ARCA).
El administrador aprueba la documentación.
El sistema habilita el perfil del chofer para operar y lo notifica.
Flujos Alternativos:
Paso 5 – Documentación rechazada: El administrador rechaza con un motivo específico. El sistema notifica al chofer e indica qué documentos debe corregir o volver a cargar.
Paso 2 – Archivo con formato inválido: El sistema informa los formatos aceptados y solicita volver a cargar el documento.
Postcondiciones:
Si se aprueba: el perfil del chofer queda habilitado para visualizar cargas y postularse.
Si se rechaza: el perfil permanece bloqueado hasta que el chofer corrija la documentación.

CU-12: Filtrar y Sugerir Cargas o Choferes
Actor: Chofer (busca cargas) / Usuario o Empresa (busca choferes)
Objetivo: Obtener sugerencias personalizadas de cargas o choferes compatibles según características del perfil, ubicación, trayecto y condiciones del envío.
Precondiciones:
El usuario tiene sesión iniciada y su perfil está completo.
Existen cargas o choferes registrados en el sistema.
Escenario Principal:
El usuario accede a la sección de búsqueda correspondiente ("Cargas Disponibles" o "Choferes Sugeridos").
El sistema analiza automáticamente el perfil del usuario y precarga sugerencias relevantes (por zona, historial de viajes o tipo de mercadería habitual).
El usuario aplica filtros adicionales: ubicación, tipo de mercadería, capacidad del camión, fechas o puntaje mínimo de valoración.
El sistema procesa los filtros y presenta los resultados ordenados por compatibilidad.
El usuario revisa las sugerencias y accede al detalle del que le interesa.
Flujos Alternativos:
Paso 4 – Sin resultados: El sistema informa que no hay coincidencias para los filtros aplicados y sugiere flexibilizar algún criterio.
Paso 2 – Perfil incompleto: El sistema no puede generar sugerencias personalizadas e invita al usuario a completar su perfil para mejorar los resultados.
Postcondiciones:
No se modifica ningún dato. El usuario obtiene una lista filtrada y ordenada para facilitar su decisión.



Cronograma / Gantt

Repositorio 
https://github.com/vicent301/CargoLink.git

Referencias
https://www.revistachacra.com.ar/actualidad/26851/ 


