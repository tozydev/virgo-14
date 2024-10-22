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
date: 22/10/2024
lang: vi
fontsize: 12pt
titlepage: true
titlepage-rule-color: "360049"
titlepage-background: "backgrounds/title-page.pdf"
toc: true
toc-own-page: true
toc-depth: 3
caption-justification: centering
numbersections: true
footer-left: "\\hspace{1cm}"
---

\renewcommand{\listfigurename}{Danh mục hình ảnh}
\listoffigures
\addcontentsline{toc}{section}{\listfigurename}

\newpage

\section*{Thông tin tài liệu}
\addcontentsline{toc}{section}{Thông tin tài liệu}

- **Tên dự án:** Hair Salon
- **Mã dự án:** virgo-14
- **Phiên bản:** 1.0 draft 2
- **Ngày hoàn thành:** 22/10/2024
- **Người soạn:** Nguyễn Thanh Tân
- **Người đóng góp:**
    - Lê Hoàng Chiến
    - Nguyễn Huỳnh Sang
    - Võ Hồ Hoàng Hà
    - Đoàn Thị Yến
    - Đặng Huỳnh Trà My
    - Trần Đặng Mỹ Duyên

\newpage

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

Ngoài ra, website còn tích hợp thanh toán bằng mã QR, tạo và lưu hóa đơn cho khách đến sử dụng dịch vụ không thông qua
website. Từ đó, nâng cao trải nghiệm sử dụng dịch vụ của khách hàng và quản lý có thể giám sát, theo dõi, thông kê các
hoạt động của tiệm.

### Thuật ngữ

| Thuật ngữ            | Viết tắt | Giải thích                                                     |
|----------------------|----------|----------------------------------------------------------------|
| Guest                |          | Những người sử dụng hệ thống chưa đăng ký/đăng nhập tài khoản. |
| Customer             |          | Khách hàng sử dụng dịch vụ của tiệm.                           |
| Employee             |          | Nhân viên phục của cửa tiệm.                                   |
| Manager              |          | Nhân viên quản lý hoặc chủ cửa tiệm.                           |
| System Administrator |          | Nhân viên giám sát, hỗ trợ kĩ thuật về hạ tầng hệ thống.       |        

## Yêu cầu chức năng

### Các tác nhân

Các tác nhân tương tác với hệ thống gồm: Guest, Customer, Employee, Manager và System Administrator. Các đối tượng đó
được thể hiện trên sơ đồ sau:

```plantuml
'| fig-cap: Biểu đồ mô hình hóa các tác nhân
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


actor Employee
actor Manager
Employee <-right- Manager

Employee -up- UC: manage
Manager -up- UC: manage

actor "System Administrator" as AD

AD -d- System: administer

@enduml
```

### Các chức năng của hệ thống

1. Đăng nhập/Đăng ký: Mục đích để xác thực và phân quyền truy cập vào hệ thống.
2. Quản lý lịch hẹn: Khách hàng có thể tạo lịch hẹn với nhân viên và chọn khung giờ thích hợp hoặc có thể thay đổi lịch
   hẹn hiện có. Nhân viên có thể chấp nhận hoặc từ chối lịch của khách hàng.
3. Khách hàng thân thiết: Tích điểm thưởng qua sử dụng dịch vụ và sử dụng điểm thưởng để khấu trừ các hóa đơn thanh
   toán.
4. Quản lý dịch vụ: Quản lý có thể thêm, xóa, sửa các dịch vụ cho tiệm.
5. Quản lý nhân viên: Quản lý có thể thêm, xóa, sửa nhân viên của tiệm.
6. Quản lý hóa đơn: Nhân viên có thể tạo các hóa đơn sử dụng dịch vụ cho khách hàng, các hóa đơn sẽ được lưu trữ để
   thống kê, báo cáo.
7. Quản trị và giám sát hệ thống: Là công việc của Quản trị viên.

### Biểu đồ use case tổng quan

```plantuml
'| fig-cap: Biểu đồ use case tổng quan
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
actor Employee as S
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
    usecase "Đăng ký" as UC4
    usecase "Quản lý lịch hẹn" as UC6
    usecase "Đánh giá dịch vụ" as UC7
    usecase "Quản lý thông tin cá nhân" as UC8
    usecase "Xem lịch sử đặt hẹn" as UC20
  }

  rectangle "Admin" as B {
    usecase "Quản lý lịch hẹn khách hàng" as UC9
    usecase "Xem lịch sử làm việc" as UC10
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
N2 .l. B

G -d- UC1
G -d- UC2
G -d- UC4
G -d- UC5

C -d- UC6
C -d- UC7
C -d- UC8
C -d- UC20

S -u- UC5
S -u- UC9
S -u- UC10
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
'| fig-cap: Biểu đồ use case phân rã của **Customer**
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

#### Phân rã use case “Employee”

```plantuml
'| fig-cap: Biểu đồ use case phân rã của **Employee**
@startuml

skinparam usecase {
  BackgroundColor BUSINESS
}

skinparam note {
  BackgroundColor LightSkyBlue
}

left to right direction

actor Employee as S

rectangle System {
  usecase "Phản hồi đánh giá" as UC1
  usecase "Tạo hóa đơn\nthanh toán" as UC2
  usecase "Xem lịch sử\nlàm việc" as UC4
  usecase "Quản lý lịch hẹn\nkhách hàng" as UC5
  usecase "Xem dịch vụ" as UC6
  usecase "Tạo mới hóa đơn\ndịch vụ" as UC7
  usecase "Tạo hóa đơn\ntheo lịch hẹn" as UC8
  usecase "Xem lịch hẹn" as UC11
  usecase "Chấp nhận\nlịch hẹn" as UC12
  usecase "Dời lịch hẹn" as UC13
  usecase "Hủy lịch hẹn" as UC14
  usecase "Cập nhật có mặt/vắng\nmặt của khách hàng" as UC15
}

UC2 <|-- UC7
UC2 <|-- UC8

UC5 <.. UC11 : <<extends>>
UC5 <.. UC12 : <<extends>>
UC5 <.. UC13 : <<extends>>
UC5 <.. UC14 : <<extends>>
UC5 <.. UC15 : <<extends>>

S -- UC1
S -- UC2
S -- UC4
S -- UC5
S -- UC6

@enduml
```

#### Phân rã use case “Manager”

```plantuml
'| fig-cap: Biểu đồ use case phân rã của **Manager**
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
  usecase "Quản lý dịch vụ" as UC1
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

Guest cần đăng nhập để sử dụng các chức năng của hệ thống. Nếu chưa có tài khoản Guest bắt buộc phải đăng ký. Nếu quên
mật khẩu, hệ thống sẽ cho phép cấp lại mật khẩu thông qua email đã đăng ký.

Sau khi đăng nhập thành công vào hệ thống, Customer có thể sử dụng các chức năng như Quản lý thông tin, Quản lý đặt lịch
hẹn, và các chức năng trong phạm vi của mình mà hệ thống đã cấp phát.

Đối với Employee, các tài khoản phải được cung cấp bởi Manager, Employee không thể tự đăng ký tài khoản. Nếu đăng nhập
lần đầu, hệ thống sẽ yêu cầu tạo một mật khẩu mới để thay mật khẩu được cấp. Employee cũng có thể sử dụng hệ hệ thống
dành cho nhân viên trong thuộc các quyền hạn được cấp.

```plantuml
@startuml
'| fig-cap: Quy trình sử dụng phần mềm chung
skinparam activityBackgroundColor BUSINESS

start
if (Có tài khoản?) then (Không)
  :Đăng ký tài khoản;
  :Xác thực OTP;
else (Có)
endif
:Đăng nhập;
if (Quên mật khẩu?) then (Có)
  :Đặt lại mật khẩu;
  ->Đăng nhập;
else (Không)
endif
:Sử dụng chức năng;
:Đăng xuất;
stop
@enduml
```

#### Quy trình sử dụng phần mềm của “Customer”

![Quy trình sử dụng phần mềm chung của **Customer**](attachments/quy-trinh-su-dung-phan-mem-cua-customer.svg)

#### Quy trình quản lý lịch hẹn

Khách hàng chọn các chức năng: đặt lịch, xem lịch, hủy lịch và thay đổi lịch hẹn. Hệ thống sẽ phản hồi lại từng yêu cầu:
lưu thông tin lịch hẹn, hiển thị lịch hẹn chi tiết, cập nhật lịch hẹn đã hủy, kiểm tra lịch hẹn trùng lịch. Khi xác nhận
thành công sẽ gửi thông báo về cho khách hàng.

![Quy trình quản lý lịch hẹn](attachments/quy-trinh-quan-ly-lich-hen.svg)

#### Quy trình quản lý lịch hẹn khách hàng

![Quy trình quản lý lịch hẹn khách hàng](attachments/quy-trinh-quan-ly-lich-hen-khach-hang.svg)

#### Quy trình quản lý dịch vụ

![Quy trình quản lý dịch vụ](attachments/quy-trinh-quan-ly-dich-vu.svg)

#### Quy trình quản lý nhân viên

![Quy trình quản lý nhân viên](attachments/quy-trinh-quan-ly-nhan-vien.svg)

## Yêu cầu phi chức năng

1. **Tính khả dụng**

    - Hệ thống cần đạt tỷ lệ hoạt động ít nhất 99,5% trong năm.
    - Thời gian khôi phục hệ thống sau khi xảy ra sự cố không quá 2 giờ.

2. **Tính bảo mật**

    - Hệ thống cần đáp ứng các tiêu chuẩn an ninh thông tin phổ biến như OWASP.
    - Các tài khoản người dùng phải được bảo vệ bằng mật khẩu mạnh và có cơ chế xác thực 2 yếu tố.
    - Dữ liệu của khách hàng và giao dịch thanh toán phải được mã hóa và bảo vệ nghiêm ngặt.

3. **Tính di động**

    - Giao diện người dùng phải được thiết kế responsive, có thể truy cập tốt trên các thiết bị di động như điện thoại
      và
      máy tính bảng.
    - Ứng dụng di động cho phép nhân viên quản lý lịch hẹn và thông tin khách hàng trên thiết bị di động.

4. **Khả năng mở rộng**

    - Hệ thống cần có khả năng mở rộng để phục vụ từ 5 đến 50 nhân viên và hàng trăm khách hàng.
    - Cơ sở dữ liệu phải có thiết kế sẵn sàng cho việc mở rộng quy mô.

5. **Hiệu suất**

    - Thời gian phản hồi của hệ thống trong các tác vụ quan trọng như đặt lịch hẹn, thanh toán không quá 3 giây.
    - Hệ thống phải có khả năng xử lý ít nhất 50 giao dịch đặt lịch hẹn đồng thời.

6. **Khả năng tích hợp**

    - Hệ thống cần tích hợp với cổng thanh toán trực tuyến phổ biến như VNPay, MoMo.
    - Cần có giao diện API để có thể tích hợp với các hệ thống khác trong tương lai.

7. **Độ tin cậy**

    - Hệ thống phải có cơ chế sao lưu dữ liệu và khôi phục dữ liệu trong trường hợp sự cố, đảm bảo không mất dữ liệu.
    - Hệ thống cần có chức năng theo dõi và cảnh báo các lỗi, sự cố phát sinh.

## Kiến trúc hệ thống

### Kiến trúc tổng thể

```plantuml
'| fig-cap: Biểu đồ thành phần hệ thống
@startuml

package Frontend as F {
    [React App] as RA
    interface "HTTP" as FHTTP
    RA -r- FHTTP
}

package Backend as B {
    [Controller] as C
    [Business\nLogic] as BS
    [Data Access] as DA
    database "SQLServer" as DB
    
    FHTTP .r.> HTTP : call REST API
    HTTP -r- C
    C ..> BS
    BS ..> DA
    DA .l.> DB : access
}

@enduml
```

### Luồng dữ liêu của hệ thống

```mermaid
---
config:
    flowchart:
        defaultRenderer: elk
---
%%| fig-cap: Biểu đồ luồng dữ liệu hệ thống cấp 1
graph TD
    A[Customer] --> |Đặt lịch| P1((Hệ Thống Lịch Hẹn))
    A --> |Xem dịch vụ| P2((Hệ Thống Dịch Vụ))
    A --> |Đánh giá dịch vụ| P3((Hệ Thống Đánh Giá))
    C[Employee] --> |Quản lý lịch hẹn| P1
    C --> |Tạo hóa đơn| P4((Hệ Thống Hóa Đơn))
    D[Manager] --> |Quản lý dịch vụ| P2
    D --> |Quản lý nhân viên| P5((Hệ Thống Nhân Viên))
    D --> |Xem báo cáo| P6((Hệ Thống Báo Cáo))
    P1 <--> |Dữ liệu lịch hẹn| DS1[(Appointment DB)]
    P2 <--> |Dữ liệu dịch vụ| DS2[(Service DB)]
    P3 <--> |Dữ liệu đánh giá| DS3[(Rating DB)]
    P4 <--> |Dữ liệu hóa đơn| DS4[(Invoice DB)]
    P5 <--> |Dữ liệu nhân viên| DS5[(Employee DB)]
    P6 --> |Tạo báo cáo| D
    P4 <--> |Tiến hành thanh toán| E[Cổng thanh toán]
    P1 --> |Xác nhận lịch hẹn| A
    P2 --> |Thông tin dịch vụ| A
    P4 --> |Hóa đơn| A
    P1 --> |Dời lịch hẹn| C
    P2 --> |Chi tiết dịch vụ| C
    P5 --> |Thông tin nhân viên| C
    P6 <--> |Thông tin tài chính| DS4
    P6 <--> |Thông tin hiệu năng| DS5
```

### Quan hệ các thực thể

```mermaid
%%| fig-cap: Biểu đồ quan hệ thực thể
erDiagram
    customer["Customer"]

    employee["Employee"]

    rating["Rating"]

    service["Service"]

    appointment["Appointment"]

    bill["Bill"]

    customer }o--o| appointment : makes
    employee }o--|| appointment : serves
    appointment ||--o{ service  : includes
    appointment |o--|| rating : has
    bill }|--|| appointment : ""
    bill ||--o{ employee : creates
```
