import { Add, Delete, Edit } from "@mui/icons-material";
import {
  Button,
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Modal,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "80%", md: "60%" },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Inventaris = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container sx={{ marginTop: 4 }}>
      {/* HEADER */}
      <Paper
        elevation={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ fontSize: 40 }}>
            Inventaris
          </Typography>
          <Typography sx={{ marginTop: 2 }} variant="body2">
            Edit Data Inventaris
          </Typography>
        </Box>
        <Box>
          <Button startIcon={<Add />} onClick={handleOpen} variant="contained">
            Tambah
          </Button>
        </Box>
      </Paper>
      {/* END OF HEADER */}
      {/* TABLE */}
      <Paper sx={{ marginTop: 4 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nama</TableCell>
                <TableCell align="right">Kategori</TableCell>
                <TableCell align="right">Jumlah</TableCell>
                <TableCell align="right">Harga</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Expired</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow hover={true}>
                <TableCell component="th" scope="row">
                  Surya 12
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  Kategori
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  100
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  18000
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  Rokok Filter
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  10/10/2023
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  <IconButton>
                    <Edit />
                  </IconButton>
                  <IconButton>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {/* TABLE */}
      {/* MODAL TAMBAH BARANG */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Tambah Barang
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Isi Semua Form Dibawah Ini
          </Typography>
          <Box
            marginTop={4}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box flex={1}>
              <TextField
                id="nama-barang"
                label="Nama Barang"
                variant="outlined"
                fullWidth
              />
              <TextField
                sx={{ marginTop: 4 }}
                id="kategori"
                label="Kategori"
                variant="outlined"
                fullWidth
              />
              <TextField
                sx={{ marginTop: 4 }}
                id="jumlah"
                label="Jumlah"
                variant="outlined"
                fullWidth
              />
              <TextField
                sx={{ marginTop: 4 }}
                id="harga"
                label="Harga"
                variant="outlined"
                fullWidth
              />
            </Box>
            <Box
              flex={1}
              sx={{
                display: "flex",

                flexDirection: "column",
                marginLeft: { xs: 0, sm: 4 },
              }}
            >
              <img src="https://fakeimg.pl/200x100/" alt="None" />
              <Button
                component="label"
                variant="contained"
                sx={{ marginTop: 3 }}
              >
                Upload Gambar
                <input type="file" hidden />
              </Button>
            </Box>
          </Box>
          <TextField
            sx={{ marginTop: 4 }}
            id="jumlah"
            label="Deskripsi"
            variant="outlined"
            fullWidth
          />
          <Button
            startIcon={<Add />}
            variant="contained"
            sx={{ float: "right", marginTop: 4 }}
          >
            Tambah
          </Button>
        </Box>
      </Modal>
      {/* END OF MODAL TAMBAH BARANG */}
    </Container>
  );
};

export default Inventaris;
