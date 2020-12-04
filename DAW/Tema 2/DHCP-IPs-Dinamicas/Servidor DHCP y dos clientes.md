# Servidor DHCP y dos clientes

Lo que nos pide:

| Nombre de equipo            | Funcion        | Direcciones IP  |
|-----------------------------|----------------|-----------------|
| Server1                     | Servidor DHCP  | enp0s3: 192.168.0.200 enp0s8: 192.168.1.200 enp0s9:192.168.2.200  |
| Client1                     | Cliente 1      | enp0s3: dinámica dentro de 192.168.1.0/24  |
| *(Ubuntu desktop)* Client2  | Cliente 2      | enp0s3: dinámica dentro de 192.168.2.0/24  |

En este caso son 3 interfaces diferentes, tenemos enp0s3, enp0s8 y enp0s9:

- **enp0s3**: Pertenece el servidor DHCP.
- **enp0s8**: Pertenece Cliente 1.
- **enp0s9**: Pertenece Cliente 2.

Por otro lado, tenemos 2 redes internas intnet y intnet2, a las cuales:

- **intnet**: Pertenece enp0s8 de server1 y enp0s3 de client1.
- **intnet2**: Pertenece enp0s9 de server1 y enp0s3 de *(Ubuntu desktop)* client2.

## Paso 1

Comprobar configuraciones de cada maquina virtual.

En la maquina de **Server1** tendremos que tener 3 adaptadores:

- Adaptador 1: Adaptador puente.
- Adaptador 2: Red interna ***(intnet)*** .
- Adaptador 3: Red interna ***(intnet2)*** .

En la maquina de **Client1** tendremos que tener 2 adaptadores:

- Adaptador 1: Adaptador puente.
- Adaptador 2: Red interna ***(intnet)*** .

En la maquina de *(Ubuntu desktop)* **Client2** tendremos que tener 2 adaptadores:

- Adaptador 1: Adaptador puente.
- Adaptador 2: Red interna ***(intnet2)*** .

## Paso 2

Preparar las maquinas virtuales para llevar a cabo la configuracion de DHCP.

Abrimos el archivo de configuracion de red **`/etc/netplan`** en formato yaml de cada maquina virtual.

La de **Server1** tendria que quedar asi:

```markdown
network:
  ethernets:
    enp0s3:
      dhcp4: true
    enp0s8:
      dhcp4: no
      dhcp6: no
      addresses: [192.168.1.200/24]
      gateway4: 192.168.1.1
      nameservers:
        addresses: [8.8.8.8, 8.8.4.4]
    enp0s9:
      dhcp4: no
      dhcp6: no
      addresses: [192.168.2.200/24]
      gateway4: 192.168.2.1
      nameservers:
        addresses: [8.8.8.8, 8.8.4.4]
  version: 2
```

La de **Client1** y *(Ubuntu desktop)* **Client2** tendria que quedar asi:

```markdown
network:
  ethernets:
    enp0s3:
      dhcp4: yes
  version: 2
```

**IMPORTANTE**: Despues de editar estos archivos y guardar los cambios hay que ejecutar el comando **`sudo netplan apply`**.

## Paso 3

Configuracion DHCP

Primero en la maquina servidor **(Server1)** tendremos que ir a **`/etc/default/`** y alli editar el archivo **`isc-dhcp-server`** que le indicamos las interfaces por las cuales el servidor entregara ips dinamicas, editamos el apartado **`INTERFACESv4=""`** donde pondremos enp0s8 y enp0s9 *(separados por un espacio)* quedaria tal que asi: **`INTERFACESv4="enp0s8 enp0s9"`**.

Segundo tendremos que ir a **`/etc/dhcp/`** para tocar el archivo **`dhcpd.conf`** para configurar los rangos de ips disponibles de la red.

Segun el enunciado tenemos dos redes la **`192.168.1.0/24`** y **`192.168.2.0/24`** las cuales configuraremos en **`dhcpd.conf`** de la siguiente manera:

- **`192.168.1.0/24`**

  ```markdown
  subnet 192.168.1.0 netmask 255.255.255.0 {
   range 192.168.1.25 192.168.1.27;
   option domain-name-servers 192.168.1.200;
   option broadcast-address 192.168.1.255;
  }
  ```

- **`192.168.2.0/24`**

  ```markdown
  subnet 192.168.2.0 netmask 255.255.255.0 {
   range 192.168.2.25 192.168.2.27;
   option domain-name-servers 192.168.2.200;
   option broadcast-address 192.168.2.255;
  }
  ```

**IMPORTANTE**: Despues de editar estos archivos y guardar los cambios, reiniciaremos el servicio: **`systemctl restart isc-dhcp-server`**.

## Paso 4

Obteniendo las IPs dinamicas.

A continuacion, iniciamos el **Client1** y *(Ubuntu desktop)* **Client2**, que como es de esperar tendra una ip dinamica del rango indicado en la configuracion anterior.

Comprobamos con **`ip -c a`**.

Finalmente dentro del archivo **`/var/lib/dhcp/dhcpd.leases`** vemos el registro de alquiler de direcciones IP del servidor.
