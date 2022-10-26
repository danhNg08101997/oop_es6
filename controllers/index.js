// import { NhanVien } from "../models/NhanVien.js";
// let nv = new NhanVien();
// nv.hienThiThongTin();
// console.log(nv);
class NhanVien {
  taiKhoan = "";
  matKhau = "";
  hoTen = "";
  email = "";
  soDienThoai = "";
  dangNhap() {
    //code xử lý api đăng nhập
    return true;
  }
  dangXuat() {
    // clear localStorage cookie...
    return true;
  }
}
class GiangVien extends NhanVien {
  danhSachLopHoc = [];
  luongCB = 0;
  heSoLuong = 1.5;

  taoBaiGiang() {
    console.log("Tạo bài giảng");
  }
  chamCong() {
    console.log("Chấm công");
  }
}
class Mentor extends NhanVien {
  danhSachLopHocMentor = [];
  luongCB = 0;
  heSoLuong = 1;
  diemDanh() {
    console.log("Điểm danh");
  }
  chamBai() {
    console.log("Chấm bài");
  }
}

let mentorDanh = new Mentor();
console.log(mentorDanh);
