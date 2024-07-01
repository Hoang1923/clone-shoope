const danhSachCSKH_element = document.getElementById ("danhSachCSKH")

const danhSachCSKH_options = [
    "Trung Tâm Trợ Giúp",
    "Shopee Blog",
    "Shopee Mall",
    "Hướng Dẫn Mua Hàng",
    "Hướng Dẫn Bán Hàng",
    "Thanh Toán",
    "Shopee Xu",
    "Vận Chuyển",
    "Trả Hàng & Hoàn Tiền",
    "Chăm Sóc Khách Hàng",
    "Chính Sách Bảo Hành"

]

const doDaiMang = danhSachCSKH_options.length

for (var i = 0; i < doDaiMang; i++)
    {
        let tenOption = danhSachCSKH_options[i]
        const phanTuDuocThem = `<a href="">${tenOption}</a>`
        danhSachCSKH_element.innerHTML =  danhSachCSKH_element.innerHTML + phanTuDuocThem
    }


const danhSachVeShoppe_element = document.getElementById("danhSachVeShoppe")

const danhSachVeShoppe_options = [
    "Giới Thiệu Về Shopee Việt Nam",
    "Tuyển Dụng",
    "Điều Khoản Shopee",
    "Chính Sách Bảo Mật",
    "Chính Hãng",
    "Kênh Người Bán",
    "Flash Sales",
    "Flash Sales",
    "Chương Trình Tiếp Thị Liên Kết Shopee",
    "Liên Hệ Với Truyền Thông"
]

let doDaiMang1 = danhSachCSKH_options.length

for(var i = 0; i<doDaiMang1; i++)
    {
        let tenOption1 = danhSachVeShoppe_options[i]
        const phanTuThem1 = `<a href="">${tenOption1}</a>`
        danhSachVeShoppe_element.innerHTML += phanTuThem1
    }