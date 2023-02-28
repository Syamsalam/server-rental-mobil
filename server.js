const express = require('express');
const server = express();
const port = 8000;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cors = require('cors');

server.use(cors('*'));
server.use(express.json());

server.get('/list-rental', async (req, res) => {
    try {
        const data = await prisma.rental_mobil.findMany();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

server.post('/add-rental', async (req, res) => {
    try {
        const data = await prisma.rental_mobil.create({
            data: {
                nama: req.body.nama,
                alamat: req.body.alamat,
                nomor_telepon: req.body.nomor_telepon,
                jenis_akun: req.body.jenis_akun,
                jenis_mobil: req.body.jenis_mobil,
                kapasitas_penumpang: req.body.kapasitas_penumpang,
                harga_sewa_perhari: req.body.harga_sewa_perhari,
                harga_sewa_perjam: req.body.harga_sewa_perjam,
                tanggal_mulai_sewa: req.body.tanggal_mulai_sewa,
                tanggal_akhir_sewa: req.body.tanggal_akhir_sewa,
                lokasi_pengembalian: req.body.lokasi_pengembalian
            }
        });

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

server.put('/update-rental/:id', async (req, res) => {
    try {
        const data = await prisma.rental_mobil.update({
            where: {
                id_user: parseInt(req.params.id)
            },
            data: {
                nama: req.body.nama,
                alamat: req.body.alamat,
                nomor_telepon: req.body.nomor_telepon,
                jenis_akun: req.body.jenis_akun,
                jenis_mobil: req.body.jenis_mobil,
                kapasitas_penumpang: req.body.kapasitas_penumpang,
                harga_sewa_perhari: req.body.harga_sewa_perhari,
                harga_sewa_perjam: req.body.harga_sewa_perjam,
                tanggal_mulai_sewa: req.body.tanggal_mulai_sewa,
                tanggal_akhir_sewa: req.body.tanggal_akhir_sewa,
                lokasi_pengembalian: req.body.lokasi_pengembalian
            }
        });
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

server.delete('/delete-rental/:id', async (req, res) => {
    try {
        const data = await prisma.rental_mobil.delete({
            where: {
                id_user: parseInt(req.params.id)
            }
        });
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


server.listen(port, () => {
    console.log(`Server jalan di http://localhost:${port}`);
})

