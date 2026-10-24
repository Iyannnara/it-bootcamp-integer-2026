# 📚 Modul Kuliah: Cloud Computing, Containerization (Docker), & Deployment

Repitori ini berisi rangkuman materi komprehensif mengenai arsitektur jaringan, cloud computing, kontainerisasi menggunakan Docker, serta implementasinya pada server cloud untuk kebutuhan perkuliahan Teknologi Rekayasa Perangkat Lunak / Teknik Informatika.

---

## 📑 Daftar Isi
1. [Arsitektur Client-Server & Jaringan Dasar](#1-arsitektur-client-server--jaringan-dasar)
2. [Cloud Computing Service Models (IaaS, PaaS, SaaS)](#2-cloud-computing-service-models-iaas-paas-saas)
3. [Virtualisasi vs Kontainerisasi (Docker)](#3-virtualisasi-vs-kontainerisasi-docker)
4. [Docker Implementation & CLI](#4-docker-implementation--cli)
5. [Integrasi Cloud Server + Docker (Orchestration & Deployment)](#5-integrasi-cloud-server--docker-orchestration--deployment)
6. [Latihan Soal & Evaluasi](#6-latihan-soal--evaluasi)

---

## 1. Arsitektur Client-Server & Jaringan Dasar

Sistem terdistribusi modern beroperasi menggunakan arsitektur **Client-Server** di atas protokol **HTTP/HTTPS** dan **TCP/IP**.

```text
  +-------------------+                      +-------------------+
  |      CLIENT       |  --- Request --->    |      SERVER       |
  | (Browser/Mobile)  |  <--- Response ---   | (Web/App/Database)|
  +-------------------+                      +-------------------+
```

### 1.1 Komponen Komunikasi
* **Client (Requestor):** Mengirimkan *HTTP Request* yang berisi Method (`GET`, `POST`, `PUT`, `DELETE`), Headers, dan Body (Payload JSON).
* **Server (Provider):** Memproses permintaan pada port tertentu dan mengembalikan *HTTP Response* beserta Status Code (`2xx`, `3xx`, `4xx`, `5xx`).

### 1.2 Identifikasi Jaringan & Port
* **IP Address:** Alamat unik perangkat dalam jaringan (IPv4 / IPv6, Public vs Private IP).
* **Port & Socket:** Titik akhir komunikasi logis (*logical endpoint*).
  * `Port 80`: HTTP
  * `Port 443`: HTTPS
  * `Port 22`: SSH (Remote Management)
  * `Port 3306`: MySQL / MariaDB
  * `Port 5432`: PostgreSQL

---

## 2. Cloud Computing Service Models (IaaS, PaaS, SaaS)

Cloud computing menyediakan sumber daya komputasi secara *on-demand* melalui internet dengan model *pay-as-you-go*.

### 📊 Perbandingan Tanggung Jawab (Responsibility Matrix)

| Komponen / Layer | On-Premise | IaaS | PaaS | SaaS |
| :--- | :--- | :--- | :--- | :--- |
| **Applications** | User | User | User | Vendor |
| **Data & Runtime** | User | User | Vendor | Vendor |
| **Operating System**| User | User | Vendor | Vendor |
| **Virtualization & HW**| User | Vendor | Vendor | Vendor |

* **IaaS (Infrastructure as a Service):** Menyediakan VM mentah (Contoh: AWS EC2, DigitalOcean). User kontrol penuh ke OS.
* **PaaS (Platform as a Service):** Menyediakan environment siap pakai, user fokus ke kodingan (Contoh: Heroku, Vercel, Render).
* **SaaS (Software as a Service):** Aplikasi siap pakai via browser (Contoh: Gmail, Google Drive).

---

## 3. Virtualisasi vs Kontainerisasi (Docker)

```text
    VIRTUAL MACHINE (VM)                      DOCKER CONTAINER
+--------------------------+             +--------------------------+
|  App A   |    App B      |             |  App A   |    App B      |
+----------+---------------+             +----------+---------------+
| Bins/Libs|  Bins/Libs    |             | Bins/Libs|  Bins/Libs    |
+----------+---------------+             +--------------------------+
| Guest OS |  Guest OS     |             |      Docker Engine       |
+----------+---------------+             +--------------------------+
|       Hypervisor         |             |        Host OS           |
+--------------------------+             +--------------------------+
|      Physical Hardware   |             |    Physical Hardware     |
+--------------------------+             +--------------------------+
```

| Parameter | Virtual Machine | Docker Container |
| :--- | :--- | :--- |
| **Abstraksi** | Tingkat Hardware | Tingkat Operating System (Kernel) |
| **Ukuran** | GigaByte (GB) | MegaByte (MB) |
| **Startup Time** | Menit (Booting OS) | Detik / Milidetik |
| **Isolasi** | Total (Hardware level) | Berbasis Kernel Namespace & Cgroups |

---

## 4. Docker Implementation & CLI

### 4.1 Contoh `Dockerfile` (Node.js)
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "server.js"]
```

### 4.2 Perintah CLI Penting
```bash
# Build image
docker build -t nama-app:v1 .

# Jalankan container
docker run -d -p 8080:3000 --name container-app nama-app:v1

# Cek container aktif
docker ps

# Lihat logs container
docker logs -f container-app
```

---

## 5. Integrasi Cloud Server + Docker (Orchestration & Deployment)

### 5.1 Docker Compose (`docker-compose.yml`)
Digunakan untuk mengelola *multi-container application* secara bersamaan.

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "80:3000"
    environment:
      - DB_HOST=db
    depends_on:
      - db

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: mydb
      POSTGRES_PASSWORD: secretpassword
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
```

### 5.2 Alur CI/CD Deployment ke Cloud
```text
[ Developer ] --( git push )--> [ GitHub Repository ]
                                        │
                                  [ CI/CD Pipeline ]
                                    (Build & Test)
                                        │
                                  [ Docker Registry ]
                                        │
                                  [ Cloud Server ] (SSH)
                                    (docker pull & up)
```

---

## 6. Latihan Soal & Evaluasi Mandiri

1. **Analisis Arsitektur:** Jelaskan mengapa Docker Container jauh lebih hemat resource memori dan CPU dibandingkan Virtual Machine konvensional!
2. **Studi Kasus Compose:** Rancang file `docker-compose.yml` untuk sistem yang membutuhkan Backend API (Node.js), Database (MySQL), dan Redis Cache dengan mekanisme *data persistence* pada database!
3. **Troubleshooting:** Bagaimana Docker mengatasi masalah klasik *"It works on my machine, but fails in production"*? Jelaskan secara teknis!

---
> *Modul ini disusun untuk keperluan pembelajaran mata kuliah rekayasa perangkat lunak dan infrastruktur server modern.*
