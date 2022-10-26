//Khai báo lớp đối tượng (Prototype) class
class NhanVien {
  maNhanVien = "";
  tenNhanVien = "";
  constructor(maNV, tenNV) {
    // hàm khởi tạo => khi new sẽ tự chạy
    this.maNhanVien = "NV00" + maNV;
    this.tenNhanVien = tenNV;
  }
  //Phương thức
  hienThiThongTin() {
    console.log("Mã nhân viên", this.maNhanVien);
    console.log("Tên nhân viên", this.tenNhanVien);

  }
}
export { NhanVien };
