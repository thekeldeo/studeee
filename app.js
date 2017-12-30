/**
 * Created by SecretSword on 12/29/17.
 */
angular
    .module('myApp', ['ngRoute', 'duScroll', 'ngCookies'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/chi-tiet/:id', {
                templateUrl: 'detail.html',
                controller: 'DetailCtrl',
                controllerAs: 'dt'
            });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $locationProvider.hashPrefix('!');
    })
    .controller('appCtrl', function ($rootScope) {
        $rootScope.data = [
            {
                title: 'Tự động hóa Excel với lập trình VBA cho người mới bắt đầu',
                description: 'Tự động hóa Excel với lập trình VBA cho người mới bắt đầu',
                content: 'Trong khoá học này, bạn sẽ được học cách dạy Excel làm việc cho bạn, làm khi bạn muốn. Từ việc tạo ra những báo cáo lặp đi lặp lại, định dạng các bảng tính, copy dữ liệu đến những công việc phức tạp hơn như là tách, gộp, tổng hợp và phân tích dữ liệu một cách hoàn toàn tự động',
                price: 799.000,
                instructor: 'Nguyễn Đức Thanh – Founder and CEO of Hocexcelonline',
                image: 'https://i.imgur.com/x5VXj9j.png',
                require: [
                    'Học viên cần có kiến thức Excel cơ bản trước khi tham gia khoá học lập trình VBA trong Excel này',
                    'Máy tính có kết nối mạng internet và trình duyệt Web',
                    'Máy tính có cài đặt phần mềm Excel từ phiên bản 2003 trở lên, tốt nhất là Excel 2007 trở lên'
                ],
                benefit: [
                    'Tự động hoá các thao tác nhàm chán, lặp đi lặp lại trong Excel giúp công việc hiệu quả, nhanh chóng, chính xác',
                    'Tự phát triển, ghi, chỉnh sửa những đoạn Macro của riêng mình để phục vụ công việc',
                    'Tách dữ liệu tự động từ 1 sheet ra nhiều sheets hoặc nhiều workbooks',
                    'Gộp dữ liệu từ nhiều sheets hoặc nhiều workbooks vào 1 sheet',
                    'Làm báo cáo 1 cách tự động bằng VBA',
                    'In ấn hàng loạt tự động',
                    'Nắm được kiến thức về ngôn ngữ lập trình VBA để có thể tự phát triển những giải pháp Excel của riêng mình'
                ],
                fit: [
                    'Chuyên viên văn phòng: kế toán, kiểm toán, tài chính, ngân hàng',
                    'Quản trị công ty, trường học, bệnh viện, và các cơ quan hành chính khác',
                    'Kỹ sư công trình xây dựng',
                    'Sinh viên các trường kinh tế, kĩ thuật'
                ],
                total: 159,
                time: 10,
                category: 'office tool',
                from: 'edumall'
            },
            {
                title: 'Tăng hiệu quả và năng suất công việc với VBA và Excel',
                description: 'Tự động hóa Excel với lập trình VBA cho người mới bắt đầu',
                content: 'Trong khoá học này, bạn sẽ được học cách dạy Excel làm việc cho bạn, làm khi bạn muốn. Từ việc tạo ra những báo cáo lặp đi lặp lại, định dạng các bảng tính, copy dữ liệu đến những công việc phức tạp hơn như là tách, gộp, tổng hợp và phân tích dữ liệu một cách hoàn toàn tự động',
                price: 199.000,
                instructor: 'Nguyễn Đức Thanh',
                image: 'https://i.imgur.com/UWKTzkn.png',
                require: [
                    'Máy tính có kết nối internet',
                    'Nên sử dụng tai nghe trong quá trình học',
                    'Nên học tại nơi yên tĩnh'
                ],
                benefit: [
                    'Ngay sau khi học xong khóa học áp dụng được những kiến thức đó thực hành hàng ngày',
                    'Sử dụng chính những ví dụ trong khoá học để phục vụ công việc',
                    'Tự phát triển những công cụ VBA và Excel để làm việc hiệu quả và năng suất hơn',
                    'Biết thêm những cách mới để giải quyết vấn đề với dữ liệu trong Excel'
                ],
                fit: [
                    'Dành cho người làm công việc có tính lặp lại trong Excel thích hợp các ngành kiểm toán, kế toán, thống kê, hay phải nhập dữ liệu và phân tích tổng hợp, tạo báo cáo',
                    'Dành cho đối tượng cần tự động hoá các thao tác trong Excel',
                    'Dành cho đối tượng muốn nâng cao năng suất và hiệu quả công việc trong Excel',
                    'Dành cho đối tượng muốn nâng cao trình độ Excel'
                ],
                total: 94,
                time: 11,
                category: 'office tool',
                from: 'edumall'
            },
            {
                title: 'Khóa học Photoshop của Edumall',
                description: 'Trọn bộ Adobe Photoshop từ cơ bản đến nâng cao.',
                content: 'Trọn bộ Adobe Photoshop từ cơ bản đến nâng cao. Chỉ cần mua 1 lần dùng trọn đời.',
                price: 799.000,
                instructor: 'Lê Đức Lợi - 15 năm kinh nghiệm thiết kế đồ họa. Anh đã tham gia giảng dạy chuyên ngành Graphic Design tại FPT',
                image: 'https://i.imgur.com/x5VXj9j.png',
                require: [
                    'Môi trường học yên tĩnh',
                    'Kết nối internet ổn định',
                    'Nên sử dụng tai nghe trong quá trình học',
                    'Phần mềm: Adobe Photoshop CC 2015'
                ],
                benefit: [
                    'Thành thạo những công cụ cơ bản, cần phải biết trong phần mềm Adobe Photoshop',
                    'Có kĩ năng sửa ảnh chân dung ấn tượng, chuyên nghiệp',
                    'Có khả năng chỉnh sửa ảnh phong cảnh theo ý muốn',
                    'Có thể tạo ra một giao diện web đẹp không thua kém gì dân thiết kế',
                    'Tự tay làm được banner quảng cáo "độc" và "lạ"',
                    'Làm ra được những bức ảnh động thú vị',
                    'Tạo ra được những hiệu ứng độc đáo cho tấm ảnh',
                    'Nắm được các nguyên lý về cách làm ảnh và tối ưu việc sử dụng Photoshop'
                ],
                fit: [
                    'Người mới học hoặc đã biết nhưng mất gốc các kiến thức Adobe photoshop',
                    'Những người có niềm đam mê chụp ảnh, chỉnh sửa ảnh để tạo ra những bức ảnh đẹp lung linh',
                    'Phóng viên, marketer, designer muốn truyền tải những ý tưởng độc đáo trong các poster và banner',
                    'Freelancer muốn kiếm tiền từ việc chỉnh sửa ảnh',
                ],
                total: 108,
                time: 11,
                category: 'design',
                from: 'edumall'
            },
            {
                title: 'Khóa học Adobe Illustrator của Edumall',
                description: 'Trọn bộ Adobe Illustrator  từ cơ bản đến nâng cao.',
                content: 'Trọn bộ Adobe Illustrator  từ cơ bản đến nâng cao. Chỉ cần mua 1 lần dùng trọn đời.',
                price: 799.000,
                instructor: 'Lê Đức Lợi - 15 năm kinh nghiệm thiết kế đồ họa. Anh đã tham gia giảng dạy chuyên ngành Graphic Design tại FPT',
                image: 'https://i.imgur.com/UWKTzkn.png',
                require: [
                    'Phần mềm Adobe Illustrator CC 2015 trên máy tính',
                    'máy tính kết nối Internet',
                    'khuyến khích sử dụng tai nghe trong quá trình học'
                ],
                benefit: [
                    'Biết sử dụng đồ họa vector',
                    'Minh họa & Biên tập được các ấn phẩm sách báo',
                    'Sáng tạo Logo & Bộ nhận dạng Thương hiệu',
                    'Tạo được các sản phẩm tờ rơi, Card Visit, Broucher, Profile...',
                    'Thiết kế Banner website nhanh chóng',
                    'Vẽ hoạt hình & Tích hợp chuyển động cho Flash...'
                ],
                fit: [
                    'Những người đang hoặc sẽ trở thành Designer, yêu thích thiết kế đồ họa và họa sĩ vẽ minh họa.',
                    'Người mới bắt đầu, người đã học nhưng chưa hiểu rõ bản chất các công cụ và chức năng trên Illustrator',
                    'Những người đang đi làm nhưng muốn củng cố lại kiến thức một cách tổng quát'
                ],
                total: 94,
                time: 11,
                category: 'design',
                from: 'edumall'
            },

        ];
    })
    .controller('MainCtrl', function ($scope, $rootScope) {
        $scope.filterCategory = 'all';
        $scope.compareList = [];
        $scope.filterMoney = 'all';
        $scope.showCompare = false;
        $scope.closeCompare = function () {
            console.log('tri');
            $scope.showCompare = false;
        };

        $scope.openCompare = function () {
            $scope.showCompare = true;
        };
        $scope.gotoCourse = function () {
            setTimeout(function () {
                console.log($("#courses"));
                $('html, body').animate({
                    scrollTop: $(window).height()
                }, 1000);
            }, 100)

        };
        $scope.pushCompare = function (item) {
            item.isSelected = true;
            if ($scope.compareList.indexOf(item)) {
                $scope.compareList.push(item);
            }
        };

        $scope.removeItem = function (index) {
            $rootScope.data[index].isSelected = false;
            $scope.compareList.splice(index, 1);
        }
    })
    .controller('DetailCtrl', function ($scope, $rootScope, $routeParams) {
        $scope.id = $routeParams.id;
        if ($scope.id) {
            $scope.detail = $rootScope.data[$scope.id];
            let html = '<div class="fb-comments" data-width="100%" data-href="http://localhost:3000/chi-tiet/' + $scope.id + '" data-numposts="5"></div>';
            $('#detail').append(html)
        }
    })
    .filter('filterCategory', function () {
        return function (items, filter) {
            if (filter === 'all') {
                return items;
            }
            else {
                let newItem = [];
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    if (item.category === filter) {
                        newItem.push(item);
                    }
                }
                return newItem;
            }
        };
    })
    .filter('filterMoney', function () {
        return function (items, filter) {
            switch (filter){
                case 'all': {
                    return items;
                }
                case 'low': {
                    let newItem = [];
                    for (var i = 0; i < items.length; i++) {
                        var item = items[i];
                        if (item.price < 200.000) {
                            newItem.push(item);
                        }
                    }
                    return newItem;
                }
                case 'mid': {
                    let newItem = [];
                    for (var i = 0; i < items.length; i++) {
                        var item = items[i];
                        if (item.price >= 200.000 && item.price < 1000.000) {
                            newItem.push(item);
                        }
                    }
                    return newItem;
                }
                case 'high': {
                    let newItem = [];
                    for (var i = 0; i < items.length; i++) {
                        var item = items[i];
                        if (item.price > 1000.000) {
                            newItem.push(item);
                        }
                    }
                    return newItem;
                }
            }
        };
    });
