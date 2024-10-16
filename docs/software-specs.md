---
title: Tài liệu đặc tả phần mềm — virgo-14
subtitle: Hair Salon Booking
author: Nguyễn Thanh Tân
contributors:
  - Lê Hoàng Chiến
  - Nguyễn Huỳnh Sang
  - Võ Hồ Hoàng Hà
  - Đoàn Thị Yến
  - Đặng Huỳnh Trà My
  - Trần Đặng Mỹ Duyên
subject: Software Specifications
lang: vi
fontsize: 12pt
titlepage: true
titlepage-rule-color: "360049"
titlepage-background: "backgrounds/title-page.pdf"
toc: true
toc-own-page: true
toc-depth: 3
numbersections: true
footer-left: "\\hspace{1cm}"
---

\renewcommand{\listfigurename}{Danh mục hình ảnh}
\listoffigures
\addcontentsline{toc}{section}{\listfigurename}

\newpage

# Tài liệu đặc tả phần mềm

<table>
    <tr>
        <th>Tên dự án</th>
        <td>Hair Salon Booking</td>
    </tr>
    <tr>
        <th>Mã dự án</th>
        <td>virgo-14</td>
    </tr>
    <tr>
        <th>Phiên bản</th>
        <td>1.0 (draft)</td>
    </tr>
    <tr>
        <th>Người soạn</th>
        <td>Nguyễn Thanh Tân</td>
    </tr>
    <tr>
        <th>Người đóng góp</th>
        <td>
            Lê Hoàng Chiến<br/>
            Nguyễn Huỳnh Sang<br/>
            Võ Hồ Hoàng Hà<br/>
            Đoàn Thị Yến<br/>
            Đặng Huỳnh Trà My<br/>
            Trần Đặng Mỹ Duyên
        </td>
    </tr>
</table>

## Giới thiệu

### Mục đích

Dự án **Hair Salon Booking** là một website đặt lịch hẹn trực tuyến cho tiệm làm tóc. Website cho phép khách hàng tìm
kiếm dịch vụ, xem thông tin dịch vụ, quản lý thông tin cá nhân và giúp quản lý salon dễ dàng.

Mục đích của tài liệu đặc tả phần mềm này là cung cấp một cái nhìn tổng quan, dễ hiểu về các yêu cầu, thành phần, kiến
trúc của dự án.

### Phạm vi

Dự án **Hair Salon Booking** phục vụ việc đặt lịch hẹn trực tuyến cho các dịch vụ trực tuyến của tiệm. Website sẽ kết
nối các khách hàng với các nhân viên làm việc trong tiệm. Nhân viên có thể theo dõi, chấp nhận từ chối các lịch hẹn mà
khách hàng đã đặt.

Ngoài ra, website còn tích hợp thanh toán bằng mã QR, tạo và lưu hóa đơn cho khách đến sử dụng dịch
vụ không thông qua website. Từ đó, nâng cao trải nghiệm sử dụng dịch vụ của khách hàng và quản lý có thể giám sát, theo
dõi, thông kê các hoạt động của tiệm.

## Yêu cầu chức năng

### Các tác nhân

Các tác nhân tương tác với hệ thống gồm: Guest, Customer, Staff, Manager và System Administrator. Các đối tượng đó được
thể hiện trên sơ đồ sau:

```plantuml
@startuml

skinparam usecase {
  BackgroundColor BUSINESS
}

skinparam note {
  BackgroundColor LightSkyBlue
}

left to right direction

actor Guest
actor Customer

Guest <-right- Customer

rectangle System {
  usecase "Hair Salon" as UC
}

Guest -- UC: visit
Customer -- UC: use


actor Staff
actor Manager
Staff <-right- Manager

Staff -up- UC: manage
Manager -up- UC: manage

actor "System Administrator" as AD

AD -d- System: administer

@enduml
```

### Các chức năng của hệ thống

1. Đăng nhập: Mục đích để xác thực người dùng khi tương tác với hệ thống nhằm cung cấp quyền và phạm vi truy cập hệ
   thống.
2. Đăng ký: Để truy cập sử dụng hệ thống, người dùng cần phải đăng ký tài khoản.
3. Quản lý lịch hẹn: Khách hàng có thể tạo lịch hẹn với nhân viên và chọn khung giờ thích hợp hoặc có thể thay đổi lịch
   hẹn hiện có. Nhân viên có thể chấp nhận hoặc từ chối lịch của khách hàng.
4. Khách hàng thân thiết: Tích điểm thưởng qua sử dụng dịch vụ và sử dụng điểm thưởng để khấu trừ các hóa đơn thanh
   toán.
5. Quản lý dịch vụ: Quản lý có thể thêm, xóa, sửa các dịch vụ cho tiệm.
6. Quản lý nhân viên: Quản lý có thể thêm, xóa, sửa nhân viên của tiệm.
7. Quản trị và giám sát hệ thống: Là công việc của Quản trị viên.

### Biểu đồ use case tổng quan

```plantuml
@startuml
skinparam usecase {
  BackgroundColor BUSINESS
}

skinparam note {
  BackgroundColor LightSkyBlue
}

left to right direction

actor Guest as G
actor Customer as C
actor Staff as S
actor Manager as M
actor "System Administrator" as AD

G <|-r- C
S <|-r- M

rectangle "System" as SS {
  note "Quản lý thường là CRUD\nCRUD: Create, Read, Update, Delete" as N2

  usecase "Đăng nhập" as UC5
  rectangle "User" as F {
    usecase "Tìm kiếm dịch vụ" as UC1
    usecase "Xem dịch vụ" as UC2
    usecase "Sử dụng trợ lý ảo" as UC3
    usecase "Đăng ký" as UC4
    usecase "Quản lý lịch hẹn" as UC6
    usecase "Đánh giá dịch vụ" as UC7
    usecase "Quản lý thông tin cá nhân" as UC8
    usecase "Xem lịch sử đặt hẹn" as UC20
  }

  rectangle "Admin" as B {
    usecase "Quản lý lịch hẹn khách hàng" as UC9
    usecase "Xem lịch sử làm việc" as UC10
    usecase "Cập nhật trạng thái" as UC11
    usecase "Tạo hóa đơn thanh toán" as UC12
    usecase "Phản hồi đánh giá" as UC13
    usecase "Quản lý dịch vụ" as UC14
    usecase "Quản lý nhân viên" as UC15
    usecase "Quản lý tài chính" as UC16
    usecase "Báo cáo và thống kê" as UC17
    usecase "Cập nhật thông tin salon" as UC18
  }
}

F -[hidden]- B
N2 .r. B

G -d- UC1
G -d- UC2
G -d- UC3
G -d- UC4
G -d- UC5

C -d- UC6
C -d- UC7
C -d- UC8
C -d- UC20

S -u- UC5
S -u- UC9
S -u- UC10
S -u- UC11
S -u- UC12
S -u- UC13
S -u- UC14 : xem

M -u- UC14
M -u- UC15
M -u- UC16
M -u- UC17
M -u- UC18

AD -- SS : administer
@enduml
```

### Biểu đồ use case phân rã

#### Phân rã use case “Customer”

```plantuml
@startuml

skinparam usecase {
  BackgroundColor BUSINESS
}

skinparam note {
  BackgroundColor LightSkyBlue
}

left to right direction

actor "Customer" as C

rectangle "System" {
  usecase "Quản lý lịch hẹn" as UC1
  usecase "Xem lịch sử đặt hẹn" as UC2
  usecase "Đánh giá dịch vụ" as UC3
  usecase "Quản lý thông tin cá nhân" as UC4
  usecase "Tạo lịch hẹn" as UC6
  usecase "Xem lịch hẹn" as UC7
  usecase "Dời lịch hẹn" as UC8
  usecase "Hủy lịch hẹn" as UC9
  usecase "Chọn dịch vụ" as UC10
  usecase "Chọn nhân viên" as UC11
  usecase "Chọn thời gian" as UC12
  usecase "Xem điểm thưởng" as UC14
  usecase "Cập nhật thông tin" as UC15
  usecase "Đổi mật khẩu" as UC16
}

C -- UC1
C -- UC2
C -- UC3
C -- UC4

UC1 <.. UC6 : <<extends>>
UC1 <.. UC7 : <<extends>>
UC1 <.. UC8 : <<extends>>
UC1 <.. UC9 : <<extends>>

UC4 <.. UC14 : <<extends>>
UC4 <.. UC15 : <<extends>>
UC4 <.. UC16 : <<extends>>

UC6 <.. UC10 : <<include>>
UC6 <.. UC11 : <<include>>
UC6 <.. UC12 : <<include>>

@enduml
```

#### Phân rã use case “Staff”

```plantuml
@startuml

skinparam usecase {
  BackgroundColor BUSINESS
}

skinparam note {
  BackgroundColor LightSkyBlue
}

left to right direction

actor Staff as S

rectangle System {
  usecase "Phản hồi đánh giá" as UC1
  usecase "Tạo hóa đơn\nthanh toán" as UC2
  usecase "Cập nhật trạng thái" as UC3
  usecase "Xem lịch sử\nlàm việc" as UC4
  usecase "Quản lý lịch hẹn\nkhách hàng" as UC5
  usecase "Xem dịch vụ" as UC6
  usecase "Tạo mới hóa đơn\ndịch vụ" as UC7
  usecase "Tạo hóa đơn\ntheo lịch hẹn" as UC8
  usecase "Có mặt" as UC9
  usecase "Vắng mặt" as UC10
  usecase "Xem lịch hẹn" as UC11
  usecase "Chấp nhận\nlịch hẹn" as UC12
  usecase "Dời lịch hẹn" as UC13
  usecase "Hủy lịch hẹn" as UC14
}

UC2 <|-- UC7
UC2 <|-- UC8

UC3 <.. UC9 : <<extends>>
UC3 <.. UC10 : <<extends>>

UC5 <.. UC11 : <<extends>>
UC5 <.. UC12 : <<extends>>
UC5 <.. UC13 : <<extends>>
UC5 <.. UC14 : <<extends>>

S -- UC1
S -- UC2
S -- UC3
S -- UC4
S -- UC5
S -- UC6

@enduml
```

#### Phân rã use case “Manager”

```plantuml
@startuml

skinparam usecase {
  BackgroundColor BUSINESS
}

skinparam note {
  BackgroundColor LightSkyBlue
}

left to right direction

actor "Manager" as M

rectangle "System" {
  usecase "Quản lí dịch vụ" as UC1
  note right of UC1: Xem, tạo, cập nhật, xóa
  usecase "Quản lí nhân viên" as UC2
  note right of UC2: Xem, tạo, cập nhật, xóa
  usecase "Cập nhật thông tin salon" as UC3
  usecase "Báo cáo và thống kê" as UC4
  usecase "Quản lý tài chính" as UC5
  usecase "Xem bảng lương" as UC6
  usecase "Xem báo cáo" as UC7
  usecase "Xem doanh thu" as UC8
}

M -- UC1
M -- UC2
M -- UC3
M -- UC4
M -- UC5

UC5 <.. UC6
UC5 <.. UC7
UC5 <.. UC8

@enduml
```

### Quy trình nghiệp vụ

#### Quy trình sử dụng phần mềm chung

#### Phía khách hàng

Guest có thể đăng ký để tạo ra tài khoản cho mình. Sau đó có thể đăng nhập để sử dụng
các chức năng của phần mềm. Nếu Guest quên mật khẩu, khách có thể yêu cầu hệ thống
cho phép mình thiết lập lại mật khẩu. Lúc này, Guest sẽ nhập OTP được gửi qua SĐT đã đăng ký.

Sau khi đăng nhập thành công vào hệ thống, Customer có thể sử dụng các chức năng như Quản lý thông tin, Quản lý đặt lịch
hẹn, và các chức năng trong phạm vi của mình mà hệ thống đã cấp phát.

```plantuml
@startuml
<style>
activity {
  BackgroundColor BUSINESS
}
swimlaneTittle {
  BackgroundColor BUSINESS
}
</style>

|Guest|
start
if (Có tài khoản?) then (yes)
else (no)
   :Đăng ký tài khoản;
  :Xác thực SĐT;
endif
:Đăng nhập;
if (Quên mật khẩu?) then (yes)
  :Yêu cầu đặt lại mật khẩu;
  :Đặt lại mật khẩu;
else (no)
endif
|Guest|
|System|
:Hiển thị chức năng tương ứng;
|#lightskyblue|System|
|Customer|
:Sử dụng chức năng tương ứng mà hệ thống cấp;
:Đăng xuất;
stop

@enduml
```

#### Phía nhân viên

Guest cần đăng nhập để có thể sử dụng hệ thống. Trong trường hợp quên mật khẩu, Guest có thể gửi yêu cầu đặt lại mật
khẩu. Nếu đăng nhập lần đầu, hệ thống sẽ yêu cầu Staff tạo một mật khẩu mới để thay mật khẩu được cấp.

Các tài khoản Staff phải được cung cấp bởi Manager, Staff không thể đăng ký tài khoản.

```plantuml
@startuml
<style>
activity {
  BackgroundColor BUSINESS
}
swimlaneTittle {
  BackgroundColor BUSINESS
}
</style>
|Guest|
start
:Đăng nhập;
if (Tài khoản tồn tại?) then (yes)
else (no)
stop
endif
if (Quên mật khẩu?) then (yes)
  :Yêu cầu đặt lại mật khẩu;
  :Đặt lại mật khẩu;
else (no)
endif
|Guest|
|Staff|
if (Đăng nhập lần đầu?) then (yes)
  :Tạo mật khẩu mới;
else (no)
endif
|System|
:Hiển thị chức năng tương ứng;
|#lightskyblue|System|
|Staff|
:Sử dụng chức năng tương ứng mà hệ thống cấp;
:Đăng xuất;
stop

@enduml
```

#### Quy trình sử dụng phần mềm của “Customer”

![quy-trinh-su-dung-phan-mem-cua-customer.png](attachments/quy-trinh-su-dung-phan-mem-cua-customer.png)

#### Quy trình quản lý lịch hẹn

Khách hàng chọn các chức năng: đặt lịch, xem lịch, hủy lịch và thay đổi lịch hẹn. Hệ thống sẽ phản hồi lại từng yêu cầu:
lưu thông tin lịch hẹn, hiển thị lịch hẹn chi tiết, cập nhật lịch hẹn đã hủy, kiểm tra lịch hẹn trùng lịch. Khi xác nhận
thành công sẽ gửi thông báo về cho khách hàng.

![quy-trinh-quan-ly-lich-hen.png](attachments/quy-trinh-quan-ly-lich-hen.png)

#### Quy trình quản lý lịch hẹn khách hàng

![quy-trinh-quan-ly-lich-hen-khach-hang.png](attachments/quy-trinh-quan-ly-lich-hen-khach-hang.png)

#### Quy trình quản lý dịch vụ

![quy-trinh-quan-ly-dich-vu.png](attachments/quy-trinh-quan-ly-dich-vu.png)

#### Quy trình quản lý nhân viên

![quy-trinh-quan-ly-nhan-vien.png](attachments/quy-trinh-quan-ly-nhan-vien.png)

#### Quy trình thanh toán

```plantuml
@startuml

|Customer|
start
:Đăng nhập;
:Sử dụng dịch vụ;
|Staff|
:Tạo hóa đơn thanh toán;
|System|
:Lưu hóa đơn;
:Thông báo hóa đơn;
|Staff|
:Hiện thị hóa đơn;
|Customer|
:Nhận hóa đơn;
if (Tiền mặt?) then (yes)
else (no)
  :Thanh toán trực tuyến;
  |Payment Gateway|
  :Xác nhận thanh toán;
  :Thông báo thanh toán thành công;
  |System|
  :Xác nhận thanh toán thành công;
  :Thông báo thanh toán thành công;
  |Staff|
  :Hiển thị thanh toán thành công;
  |Customer|
  :Hiển thị thanh toán thành công;
endif
|System|
:Ghi nhận điểm thưởng;
:Thống báo ghi nhận điểm thưởng;
|Customer|
:Hiển thị điểm thưởng;
stop

@enduml
```

## Phụ lục
