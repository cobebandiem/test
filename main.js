document.querySelector(".showAnyThing").style.display = "none";
var arrMenh = [
        {
            bikhac: "Trắng, Xám, Ghi",
            chekhac: "Vàng, Nâu đất",
            hoahop: "Xanh lục",
            menh: "mộc",
            nam: [1950, 1951, 1958, 1959, 1972, 1973, 1980, 1981, 1988, 1989, 2002, 2003, 2010, 2011],
            tuongsinh: "Đen, Xanh nước",
        },
        {
            bikhac: "Vàng, Nâu đất",
            chekhac: "Đỏ, Hồng, Tím",
            hoahop: "Đen, Xanh nước",
            menh: "thủy",
            nam: [1952, 1953, 1966, 1967, 1974, 1975, 1982, 1983, 1996, 1997, 2004, 2005, 2012, 2013],
            tuongsinh: "Trắng, Xám, Ghi",
        },
        {
            bikhac: "Đỏ, Hồng, Tím",
            chekhac: "Xanh lục",
            hoahop: "Trắng, Xám, Ghi",
            menh: "kim",
            nam: [1954, 1955, 1962, 1963, 1970, 1971, 1984, 1985, 1992, 1993, 2000, 2001, 2014, 2015],
            tuongsinh: "Vàng, Nâu đất",
        },
        {
            bikhac: "Đen, Xanh nước",
            chekhac: "Trắng, Xám, Ghi",
            hoahop: "Đỏ, Hồng, Tím",
            menh: "hỏa",
            nam: [1956, 1957, 1964, 1965, 1978, 1979, 1986, 1987, 1994, 1995, 2008, 2009],
            tuongsinh: "Xanh lục",
        },
        {
            bikhac: "Xanh lục",
            chekhac: "Đen, Xanh nước",
            hoahop: "Vàng, Nâu đất",
            menh: "thổ",
            nam: [1960, 1961, 1968, 1969, 1976, 1977, 1990, 1991, 1998, 1999, 2006, 2007],
            tuongsinh: "Đỏ, Hồng, Tím",
        },
    ],
    arrTamHom = [
        ["Nhu cầu diễn đạt tự do cá nhân.", "Khát khao tự do mạnh, cần thời gian cho rieeng mình."],
        ["Thiên hướng về cân bằng, tạo ra cảm giác hài hòa.", "Trực giác tốt thuộc tự nhiên.", "Công bằng."],
        ["Khả năng đánh giá, tình huống.", "Có lợi hoạt động kinh doanh, chuyên nghiệp."],
        ["Ý kiến, quan điểm chuẩn mực và truyền thông trong các lĩnh vực (tôn giáo, tình yêu, hôn nhân).", "Chuộng truyền thống."],
        ["Có tầng cảm xúc và nhu cầu tự do thể hiện cảm xúc, ngoại trừ các trường hợp biểu đồ ngày sinh cản trở (4-5-6, nhạy cảm, dễ tổn thương)."],
        ["Hướng về sáng tạo, yêu thương.", "Giữ tinh thần, nếu không => tuyệt vọng, khổ não."],
        ["Tự trải bợ đời, bài học giúp người khác trả giá đắt cho sự học này => nhận thức được."],
        ["Yêu thích độc lập, không thích theo số đông.", "Suy nghĩ độc lập."],
        ["Tích cực: cải thiện cuộc sống mọi người, ý thức cộng đồng.", "Tiêu cực: cái tôi, tham vọng, không thành công."],
        ["Linh hoạt tâm linh, sức mạnh tâm hồn phong phú.", "Khả năng vô hiệu hóa giới hạn, xã hội đặt ra, hiểu biết sử dụng khôn ngoan và đúng mực.", "=> Hướng cảm nhận sâu và thanh khiết."],
        ["Giá trị tâm linh đặc biệt, sức mạnh trực giác đúng.", "Lòng thương và tâm tư, đồng điệu cảm xúc người khác."],
    ],
    arrTheHien = [
        ["Thích thể thao, làm việc 1 mình cần tự do để làm việc theo nhịp độ bản thân."],
        ["Thích đem niềm vui cho người khác.", "Linh hồn của buổi tiệc.", "Thông minh, nhanh nhẹn"],
        ["Thích đem niềm vui cho người khác", "Linh hồn của buổi tiệc", "Thông minh, nhanh nhẹn"],
        ["Thực tế, khéo tay.", "Thể thao, hoạt động luôn tay."],
        ["Nhu cầu tự do thể hiện, thoát khỏi ràng buộc giới hạn.", "Việc không bó buộc để phát triển năng lực."],
        ["Năng lượng hướng về gia đình mái ấm.", "Chiều quá => cẩn thận hư."],
        ["Tự làm, tự thân vận động.", "Thích cảm giác thành tựu riêng từ bản thân."],
        ["Khao khát độc lập, làm việc một mình, dám tỏ ra khác biệt.", "Tính cách mạnh mẽ."],
        ["Hài, vui tươi, chuẩn mực.", "Nghiêm túc, dễ hút cô đơn.", "Suy ngẫm, phân tích lý tưởng sống.", "=> Cần cảm bằng niềm vui."],
        ["Hài hước, xem nhẹ nghiêm túc.", "Tránh đùa không đúng chỗ.", "Thích nghi mọi hoàn cảnh.", "=> Cần quyết tâm, nghiêm túc."],
        ["Hài hòa, cân bằng biểu đạt với cảm xúc tinh thần dễ kiểm soát cảm xúc."],
    ],
    table = [
        ["Chông chênh cuộc sống.", "Ổn định cuộc sống, nặng nè tiền bạc hoặc tình cảm.", "Cân bằng điều tiết được cuộc sống, trực giác.", "Là người hay thay đổi công việc, chưa ổn định, chưa cân bằng được cuộc sống."],
        ["Không có trực giác", "Trực giác", "Cân bằng", "Cân bằng"],
        ["Thiếu sáng trí", "Trí tuệ", "Mộng mơ", "Mộng mơ"],
        [
            "Lười, ít phải lao động chân tay và luôn được giúp đỡ, ăn nhiều không mập hoặc ốm.",
            "Số của lao động chân tay thể lực thích làm, lo bao đồng.",
            "Số của lao động chân tay thể lực làm vất vả.",
            "Số của lao động chân tay thể lực làm vất vả.",
        ],
        ["Thiếu tự tin, ít nói, để trong lòng không thể hiện ra ngoài.", "Cái nhân kêt nối cởi mở hòa, đồng thích, thể hiện ra ngoài", "Mộng mơ, cô đơn.", "Mộng mơ, cô đơn."],
        [
            "Nên dành thời gian cho gia đình, thiếu tình cảm với gia đình",
            "Sáng tạo, số của yêu thương, yêu gia đình",
            "Yêu gia đình thái quá, luôn luôn theo ý của mình áp lực cho người khác",
            "Yêu gia đình thái quá, luôn luôn theo ý của mình áp lực cho người khác",
        ],
        ["Dễ tin người bị lừa, không thấy bài học nào.", "Bài học tổn thất, rút được kinh nghiệm", "Rút được kinh nghiệm qua tổn thất và luôn đề phòng, đa nghi.", "Rút được kinh nghiệm qua tổn thất và luôn đề phòng, đa nghi.."],
        ["Khát khao, mong muốn độc lập.", "Số của độc lập.", "Cô đơn không ai hiểu mình.", "Cô đơn không ai hiểu mình."],
        [
            "Không có hoài bão, ước mơ",
            "Tham vọng, hoài bão ước mơ",
            "Tham vọng nhiều, hoài bão nhiều dẫn đến đi quá xa, mệt mỏi vì sự tham vọng của mình",
            "Tham vọng nhiều, hoài bão nhiều dẫn đến đi quá xa, mệt mỏi vì sự tham vọng của mình",
        ],
    ],
    arrDinhNam = [
        "Trước gặp nhiều tổn thất, năm đó giải quyết được ân oán, tới đây hết khổ, hòa bình dọn nợ.",
        "Năng lượng tâm linh bùng phát",
        "Trí: Học được mới mẻ, mở mang trí tuệ, học mênh mang",
        "Những cố gắng sẽ đền bù.",
        "Thay đổi nhận thức, xảy ra chuyện thay đổi lên tầng quan trọng, không lo tiền bạc.",
        "Sáng tạo, làm đủ thứ, ra dự án... =>Làm nghệ thuật.",
        "Tổn thất để đạt được những giá trị, bài học. Nhìn mặt đời đau thương. =>Năng lượng nhờ sức mạnh tâm linh.",
        "Độc lập, trí tuệ, lúc cần đi một mình để mở trí tụe",
        "Nhắc nhở: quay về làm việc tốt cho cộng đồng, liên quan con người.",
        "Trải qua đau khổ, trưởng thành =>Tích lũy đi giúp người theo bản năng.",
        "Lắng nghe thay đổi nhu cầu người khác theo hướng tâm linh.",
    ],
    bieuDo = {
        date: ["01/10/20", "01/11/20", "01/09/20", "01/10/20", "01/11/20", "01/09/20", "01/10/20", "01/08/20", "01/09/20", "01/10/20"],
        means: [
            "Sự bùng phát (a,j,s) thuận lợi cho những thay đổi lớn.",
            "Trực giác -> Nương theo (b,k,t).",
            "Năm học, mở rộng trí tuệ(c,l,u).",
            "Thoái trào 1. Ngồi yên sạc pin. Luyện nội công.",
            "Quan sát, cho đi tự do, làm mong muốn.",
            "Sáng tạo, yêu thương, tiểu đỉnh cao, đỉnh sóng nhỏ.",
            "Ngồi yên, không nhúc nhích,(ở trũng, tu luyện nội công.)",
            "Năm trí tuệ, học, thiền.",
            "Tăng cột mốc, chuyển chỗ, công việc, thanh toán nợ cũ, chuẩn bị phát triển.(1 năm thuận lợi cho bạn có những thay đổi lớn, trên đầu con sóng)",
        ],
    },
    arrApal = [
        ["a", "i", "s"],
        ["b", "k", "t"],
        ["c", "l", "u"],
        ["d", "m", "v"],
        ["e", "n", "w"],
        ["f", "o", "x"],
        ["g", "p", "y"],
        ["h", "q", "z"],
        ["i", "r"],
    ],
    arrUEOAI = ["u", "e", "o", "a", "i", "y"];
var searchProfile = document.querySelector("#search-profile");
function tinhNgaySinh(n) {
    for (var h = 0; n > 0; ) (h += n % 10), (n = Math.floor(n / 10));
    return h;
}
function checkInput(n, h, i, t) {
    return n && h && i ? !!t || (alert("Bạn chưa nhập tên"), !1) : (alert("Bạn chưa nhập ngày sinh"), !1);
}
searchProfile.addEventListener("click", function () {
    document.querySelector(".showAnyThing").style.display = "block";
    for (var n = [], h = document.querySelector("#day").value, i = h; i > 0; ) n.push(i % 10), (i = Math.floor(i / 10));
    for (var t = document.querySelector("#month").value, c = t; c > 0; ) n.push(c % 10), (c = Math.floor(c / 10));
    for (var g = document.querySelector("#year").value, l = g; l > 0; ) n.push(l % 10), (l = Math.floor(l / 10));

    var a = document.querySelector("#name").value.toLowerCase(),
        u = tinhNgaySinh(h),
        r = tinhNgaySinh(t),
        o = tinhNgaySinh(g),
        e = a.split(""),
        m = tinhNgaySinh(u + r + o),
        v = !1;
    console.log(m);
    if (
        (arrMenh.map((n, h) => {
            if (n.nam.includes(parseInt(g)))
                return (
                    (document.querySelector(
                        "#showMenh"
                    ).innerHTML = `\n                <h3>Màu Sắc Theo Mệnh</h3>\n                <ul>\n                    <li>Năm: ${g}</li>\n                    <li>Mệnh: ${n.menh}</li>\n                    <li>Tương Sinh: ${n.tuongsinh}</li>\n                    <li>Hòa Hợp: ${n.hoahop}</li>\n                    <li>Chế Khắc: ${n.chekhac}</li>\n                    <li>Bị Khắc: ${n.bikhac}</li>\n                </ul>`),
                    void (v = !0)
                );
        }),
        v || (document.querySelector("#showMenh").innerHTML = "\n            <h3>Không tìm thấy kết quả!</h3><h3>Kiểm tra lại ngày tháng năm!</h3>"),
        m)
    )
        switch (m) {
            case 2:
                document.querySelector("#showMain").innerHTML =
                    "\n                    <h3>Con số đặc biệt của bạn là: 2</h3>;\n                    <ul>\n                        <li>Người Số 2 nên vận dụng trực giác mạnh mẽ của họ để phát triển lòng tự tin và chọn cho mình những người bạn hay đối tác biết trân trọng những nét đặc trưng của họ. Điều này rất quan trọng với con đường phát triển cá nhân của Số 2. Khi trưởng thành, người Số 2 sẽ tự động phát hiện ra tầm quan trọng của khả năng kiểm soát cảm xúc, học cách sử dụng nó như một công cụ để hỗ trợ cho sự tinh tế của mình.</li>\n                        <li>Họ cũng có thể gặt hái nhiều lợi ích đáng kể nếu phát triển năng lực não bộ, đặc biệt là khả năng suy luận và trí nhớ. Sự phát triển theo hướng này sẽ củng cố lòng tự trọng của họ và góp phần giúp họ đạt được hạnh phúc to lớn trong đời sống cá nhân.</li>\n                        <li>Những người có Con số chủ đạo 2 rất cần sự dìu dắt hoặc cần một lãnh đạo để họ nương theo.</li>\n                        <li>Từ phân tích thực tế này một lần nữa khẳng định đặc điểm nổi bật của người Số 2 là có năng lực làm việc dưới trướng một người lãnh đạo năng động. Do Người có Con số 2 khiêm tốn, ít thể hiện “cái tôi” nên họ cần một chủ tướng tài ba để dẫn dắt.</li>\n                        <li>Trong cuộc sống, nếu bạn là một người lãnh đạo doanh nghiệp hoặc là một chuyên gia “săn đầu người” thì gặp những người có Con số 2 nhất định phải chiêu dụ họ về cùng bạn. Họ rất đáng để ta tin tưởng và giao trọng trách, hầu như bạn sẽ không phải lo lắng người Số 2 có ý đồ “lật đổ” vị trí của bạn. Chọn bạn cũng vậy, khi gặp người Số 2 thì cứ yên tâm kết bạn và không ngại đặt niềm tin vào họ.</li>\n                        <li>Tóm lại: Người có Thần số học Số 2 nhạy cảm, có trực giác tốt, có tinh thần hỗ trợ, đáng tin cậy, có khả năng hòa giải, giàu lòng trắc ẩn và có tính nghệ sĩ. Chính do có yếu tố nghệ sĩ, nên đôi khi họ không thể chịu được áp lực khi làm việc cường độ cao và nhiều sức ép. Họ sẽ phát huy tốt khả năng của mình với các lĩnh vực như hội họa, viết lách nhưng phải đặt dưới sự dẫn dắt của trực giác chuẩn xác mà họ có.</li>\n                        <li>Nghề nghiệp: Quạn trị doanh nghiệp, giáo dục thiện nguyện, có máu nghệ thuật, ngoại giao giỏi, hoạt động xã hôi.</li> \n                    </ul>";
                break;
            case 12:
            case 3:{
                (document.querySelector("#showMain").innerHTML =
                        "\n                    <h3>Con số đặc biệt của bạn là: 3</h3>;\n                    <ul>\n                        <li>Người số này khi đã gắn bản thân vào công việc rồi thì người khác chạy theo khó kịp bởi tốc độ nhanh chóng của họ. Sự tỉnh táo của họ được thể hiện trong hầu hết mọi việc, một số người còn lồng nó vào 1 kiểu thể hiện khá hài hước đáng ngạc nhiên làm cho những người này trở thành những người bạn đồng hành sang chói và thông minh.</li>\n                        <li>Bạn là người khi đã gắn bản thân vào công việc thì người khác khó kịp bởi tốc độ của bạn.</li>\n                        <li>Bên cạch đó sự tỉnh táo quá sắc sảo được thể hiện qua hầu hết mọi việc.</li>\n                        <li>Là đầu óc cực nhanh nhạy, hài hước, tỉnh táo, lý trí => Dễ dàng đạt được sự thành công trong công việc => bạn là linh hông của các bữa tiệc</li>\n                        <li>Tuy nhiên dễ thương, dễ chịu với người quen sơ sơ nhưng lại hay soi lỗi với người mình gắn bó lâu dài => Dễ có thể gây ra sự mệt mỏi đối với người sống gần, đặc biệt bạn đời.</li>\n                        <li>Thích giúp đỡ người khác</li>\n                        <li>Sống không mấy tích cực vì hay bị vướng vào cảm giác “cầm quyền”, chỉ đạo người khác => Dễ gây hiểu lầm và mất vui.</li>\n                        <li>Quá tỉnh táo, lý trí => thiếu kiên nhẫn và kém bao dung với những người làm việc chậm hơn.</li>\n                        <li>=>Đầu óc luôn tỉnh táo, hoạt động, đánh giá, suy nghĩ, lên kế hoạch, hài hước, thông minh. Tuy nhiên dễ gặp vấn đề trong hôn nhân nếu không kiểm soát tốt phần thiếu tích cực trong cá tính.</li>\n                        <li>=>Ăn hiếp người thân, hơi gia trưởng, không đúng ý là không thích.</li>\n                        <li>Nghề nghiệp: Làm việc liên quan đến trí não, lĩnh vực học thuật liên quan đến trí não, khoa học kế toán, quản trị kinh doang, lên phần mềm, phân tích hệ thống, nhà nghiên cứu, nhà lý luận.</li>\n                    </ul>");
                break;
            }
            case 4:
                document.querySelector("#showMain").innerHTML =
                    "\n                    <h3>Con số đặc biệt của bạn là:4</h3>;\n                    <ul>\n                        <li>Người của thực tế.</li>\n                        <li>Người mang số này bao trùm hầu hết các công việc cần động tay động chân đến công việc đòi hỏi óc tổ chức . Điều này có thể trải dài , từ việc kiếm tiền như 1 niềm vui và mục đích chính của cuộc đời , hoặc những thách thức gầy dựng nên những cú làm ăn khủng cho doanh nghiệp.</li>\n                        <li>Người mang số này có thiện hướng tự nhiên , hướng về phía “ thực tế ” chẳng thà họ nhào vô làm việc gì đó chứ không thích ngồi bàn luận về các giá trị việc ấy mang lại.</li>\n                        <li>Khi đụng đến các vấn đề thực tế , có thể tỏ ra kiên nhẫn vô bờ bến , nhưng mỗi lần chuyển sang vấn đề gì có liên quan đến khía cạnh tinh thần hay tâm linh , họ thường tỏ ra thiếu kiên nhẫn.</li>\n                        <li>Người có số này nên phát triển 3 yếu tố quan trọng như sau : Thư giãn , áp dụng các bài học về tâm trí , và phát triển trực giác.</li>\n                        <li>Thư giãn là 1 cách quan trọng để buông bỏ bớt những gánh lo về vật chất cả những mối dây liên quan đến chuyện đời sống thực tế ( chuyện cơm áo gạo tiền …)trở nên quá mệt mỏi.</li>\n                        <li>=>Người có số này rất thực tế và có vẻ chuộng chuẩn mực , rất thích hướng về vật chất.</li>\n                        <li>Họ rất quan tâm tới thể thao và rất khéo tay.</li>\n                        <li>Phù hợp nhất làm việc ở những lĩnh vực đòi hỏi kỹ năng cao</li>\n                        <li>Nghề nghiệp: Buôn bán, kỹ thuật viên, nghệ nhân, kỹ thuật vận hành máy móc, quản lý doanh nghiệp, vận động viên thể thao, nhà kinh tế, bác sĩ, chuyên viên vật lý trị liệu, người làm vườn, những lĩnh vực liên quan đế giải trí.</li>\n                        <li>Vẻ người thích liên quan đến vật chất, họ rất khéo tay, quan tâm đến thể thao, thuộc nhóm người làm ra thế giới.</li>\n                    </ul>";
                break;
            case 5:
                document.querySelector("#showMain").innerHTML =
                    "\n                    <h3>Con số đặc biệt của bạn là: 5</h3>;\n                    <ul>\n                        <li>Người này thường có khuynh hướng cố gắng thoát khỏi sự trói buộc.</li>\n                        <li>Thường tìm kiếm những công việc cho phép họ không cần phải chịu sự chỉ đạo trực tiếp từ ai, bằng cách này, họ sẽ tận hưởng được sự tự do mà họ rất cần để phát triển con đường, thể hiện thênh thang của họ một cách phù hợp nhất.</li>\n                        <li>Người mang số này thường có trực giác rất tốt, với cảm xúc sâu sắc và tư duy nghệ thuật cao, người đạt được niềm vui khôn tả khi được tự do diễn đạt những gì mình đang ấp ủ. Khi tự do , họ sống động , năng động , Nhưng một khi bị gò bó hay ràng buộc , họ trở nên ủ dột , tâm trạng lên xuống bất thường , thậm chí còn có khi lãnh đạm. Tuy vậy, bạn là người có tâm tính tốt, quyết tâm sống đời vui vẻ và cũng muốn người khác sống vui vẻ.</li>\n                        <li>Người có số này có thể chấp nhận những việc làm không mấy “chính thống“ để không phải làm việc theo giờ giấc gò bó. - Bản chất của người mang số này là đầy yêu thương và yêu tự do , có óc nghệ thuật , máu lãng du hơi “mưa nắng “.</li>\n                        <li>Yêu tự do, tùy cơ ứng biến, họ có thể xoay chuyển khi cảm thấy không hợp và hợp với các nghành nhân viên bán hàng, chính trị gia, du lich, khách sạn, nhà văn, nhà thiết kế, chủ doanh nghiệp, nhân viên xã hôi.</li>\n                        <li></li>\n                    </ul>";
                break;
            case 6:
                document.querySelector("#showMain").innerHTML =
                    "\n                    <h3>Con số đặc biệt của bạn là: 6</h3>;\n                    <ul>\n                        <li>Sống tích cực có khả năng sáng tạo lớn , tuy nhiên cũng hay lo lắng thường trực nên suy nghĩ hơn tiêu cực.</li>\n                        <li>Thường hay tự làm khổ bởi lo lắng và bồn chồn với trách nhiệm => hay bị stress.</li>\n                        <li>Nên học cách làm chủ tình huống =>đầu óc sẽ sáng tạo và phát triểu , không nên để bản thân bị cuốn theo những tình huống cùng trách nhiệm ấy.</li>\n                        <li>Cần buông bỏ bớt để có thể thể hiện được sáng tạo, sẽ không bị chìm nổi.</li>\n                        <li>Đầy lòng bao dung, yêu thương, không ích kỷ, phải nên cẩn thận để không bị lợi dụng lòng tốt.</li>\n                        <li>Mỗi khi lo lắng hay tích cực khiến bản thân vô thức trở thành khó chịu.</li>\n                        <li>Thèm đc bình yên , mong muốn có được cuộc sống bình yên.</li>\n                        <li>Nhưng sự cam chịu cam chịu hoàn cảnh sẽ hủy hoại niềm vui của chính mình.</li>\n                        <li>Số 6 luôn có sáng tạo, giỏi trong các tổ chức nhân văn, nhân đạo, hợp bác sĩ họa sĩ, nhà thiết kế.</li>\n                        <li>Có đầu óc sáng tạo, quan tâm, công bằng. không ích kỉ, yêu gia đình hay có khuynh hướng bị lo lắng bồn chồn.</li>\n                    </ul>";
                break;
            case 7:
                document.querySelector("#showMain").innerHTML =
                    "\n                    <h3>Con số đặc biệt của bạn là: 7</h3>;\n                    <ul>\n                        <li>Người mang số này sẽ triệt để trải nghiệm các bài học cả đời thông qua những thử thách hi sinh chia sẽ cho người khác.</li>\n                        <li>Người ở con số này sẽ được rèn giũa để qua vòng đời này sẽ tiến lên them 1 bước dài về phía trước.</li>\n                        <li>Đặc biệt có khả năng vô hạn được học hỏi thông qua những điều đích thân trải nghiệm => Lĩnh hội được giá trị tốt đẹp sau đó sẽ đem ra chỉ dạy hoặc chia sẽ cho người khác.</li>\n                        <li>Muốn học hỏi theo cách riếng của mình. Ít khi tiếp nhận chỉ dẫn của người => Bởi muốn tự đích thân trải nghiệm.</li>\n                        <li>Học hỏi thông qua các trải nghiệm của bản thân, không thích kỷ luật bên ngoài nào áp dụng vào mình.</li>\n                        <li>Rất quyết đoán, nhân văn và sâu => cuộc đời sẽ phát sinh nhiều vấn đề tổn thất, hi sinh, qua đó sẽ được nhiều bài học để đời để tinh tấn hơn về tinh thần</li>\n                        <li>Nghề nghiệp: Thích hợp ngành luật, những người làm công việc giảng dạy, như giáo viên, và các lĩnh vực nhân văn, như thành viên các đoàn thể trong các tôn giáo nhà khoa học, nhà triết học…</li>\n                        <li>Bên cạnh đó, họ cũng là những người có khả năng sử dụng các dụng cụ sác bén, mà biết bao nhiêu nghiệp cần sử dụng dụng cụ sắc bén, từ ngành Y có bác sĩ phẩu thuật, lao động chân tay có nghề thợ mộc, thợ rèn… Cứ theo khả năng của mỗi người tới đau, áp vào khung đó là sẽ rất phù hợp.</li>\n                    </ul>";
                break;
            case 8:
                document.querySelector("#showMain").innerHTML =
                    "\n                    <h3>Con số đặc biệt của bạn là: 8</h3>;\n                    <ul>\n                        <li>Là người rất độc lập, chỗ dựa đáng tin, tự tin, ít chịu bày tỏ tình cảm, hợp kinh doanh.</li>\n                        <li>Thường được tìm thấy ở các vị trí lãnh đạo các doanh nghiệp, khả năng điều hành xuất sắc, thường hay bị cuốn hút về các ngành phục vụ người già và trẻ em.</li>\n                        <li>Có kế hoạch và quyết tâm, tham vọng hoài bão nhiều => vì quá tham vọng nên đi hơi xa => dẫn đến mệt mỏi.</li>\n                        <li>Là người coi trọng tính độc lập, tự chủ là hàng đầu.</li>\n                        <li>Mục đích sống quan trọng là muốn bày tỏ được yêu thương.</li>\n                        <li>Rất độc lập, chỗ dựa đáng tin, tự tin, ít chịu bày tỏ tình cảm, rất quan tâm tới đối tượng bệnh tật, yếu đối.</li>\n                        <li>Nghề nghiệp: ngân hàng, chứng khoán, điều phối du lịch, thuyền trưởng hay phi công, giáo viên và y tá phục vụ người già hay trẻ em, làm việc với các loài động vật, hoặc chuyên viên nhân sự cấp cao.</li>\n                    </ul>";
                break;
            case 9:
                document.querySelector("#showMain").innerHTML =
                    "\n                    <h3>Con số đặc biệt của bạn là: 9</h3>;\n                    <ul>\n                        <li>Là người thẳng thắn, luôn mơ ước mong phục vụ con người, đầy hoài bão, ước mơ, ước vọng, tuy nhiên thường có khuynh hướng đi vào tổng thể ít khi tập trung chi tiết => hơi kém trong việc quản lý tài chính.</li>\n                        <li>Dễ mang tiền tặng cho những người cần đến hơn là ý thức tiết kiệm để giành lại cho chính mình.</li>\n                        <li>Số này luôn nỗ lực để thực hiện hoài bão, lý tưởng sống của mình. Luôn tự cảm thấy mình đầy trách nhiệm.</li>\n                        <li>Khi ước vọng thành tham vọng người mang số này có thể thống trị và phá hủy.</li>\n                        <li>Không có con mắt nhìn đúng người, ai cũng thấy tốt, nhưng lại nhìn ra điểm yếu đó của bản thân =>thêm công cụ nhìn chính xác hơn .</li>\n                        <li>Hợp với tổ chức an sinh xã hội, viên giáo dục, trị liệu chữa lành.</li>\n                        <li>Luôn hướng về yếu tố nhân văn, nghiêm túc về cuộc sống =>không biết quản lý tiền bạc => khó tiết kiệm tiền.</li>\n                    </ul>";
                break;
            case 10:
                (m = 10),
                    (document.querySelector("#showMain").innerHTML =
                        "\n                    <h3>Con số đặc biệt của bạn là: 10</h3>;\n                    <ul>\n                        <li>Người có con số này rất tự tin , hòa nhã , sáng và vui vẻ với cảm giác tinh nhạy đặc biệt có khả năng báng hàng xuất sắc</li>\n                        <li>Họ có một lòng can đảm trời cho đưa người này vào cuộc dẫn thân đầy tính tiên phong và những người khác hầu như không bao giờ nghĩ dám thực hiện.</li>\n                        <li>Khi bị áp lực , cản trở về tinh thần  , họ xuống tinh thần nhanh chóng không rõ nguyên nhân => thường bộc lộ ra ngoài những hồi nóng nảy ,\n                        thẳng thắn , bộc trực , quyết đoán , tinh thần lạc quan vô biên => Nên thành công.</li>\n                        <li>Nghề nghiệp: Diễn viên chuyên nghiệp, thiết kế, trang trí nội thất, làm việc với thực phẩm, vải, nhân viên sale giỏi, chính trị gia, nhà gây quỹ từ thiện, điều hành doanh nghiệp, giám đốc kinh doanh, hoạch định đô thị, kiến trúc sư, chuyên gia địa ốc.</li>\n                        <li>Người số 10 rất tự tin hòa nhã, sáng sủa và vui vẻ, với cảm giác tinh nhạy đặc biệt và khả năng bán hàng xuất xắc.</li>\n                        <li></li>\n                    </ul>");
                break;
            case 11:
                document.querySelector("#showMain").innerHTML =
                    "\n                    <h3>Con số đặc biệt của bạn là: 11</h3>;\n                    <ul>\n                        <li>Người mang số này là những người nhạy cảm, đầy cảm xúc và đầy quan tâm người khác. Họ yêu thích những gì tinh tế, vẻ đẹp và mọi điều về chiều sâu của những giá trị văn hóa và vô cùng thật thà và giàu tình cảm, thường tránh đời sống kinh doanh quá mệt nhọc.</li>\n                        <li>Con số này có 1 mức độ tấm linh đặc biệt cao bao quanh, làm cho những ai sinh ra dưới con số này dễ có 1 tiềm năng phát triển tầng ý thức cao rất mạnh. Phần lớn những người số này lại không đủ khả năng phát triển những tiềm năng ẩn này.</li>\n                        <li>Có những sự khác biệt cực kỳ to lớn giữa cách sống của những người số này biết sống tích cực và vận dụng được sức mạnh tâm linh vượt trội của họ vào giúp ích cuộc sống, và những người số này đầy tiêu cực với đời sống có vẻ đầy khó khăn và nhạt nhòa.</li>\n                        <li>Khi sống trong môi trường bình thường họ thường tỏ ra những người nhạy cảm, cực kỳ chân thật, có thể tin cậy, công tâm, với 1 tình cảm sâu đậm dành cho gia đình và bạn bè và 1 tình yêu cuộc sống chân thành.</li>\n                        <li>Nghề nghiệp: Giáo dục, nhà hoạt động xã hội, các thủ lĩnh tôn giáo và huấn luyện viên phát triển cá nhân. Hoặc họ cũng có thể là giáo viên các bộ môn văn hóa, biểu diễn chuyên nghiệp. Khả năng trực giác cũng có thể đưa họ đến vai trò cac nhà thiết kế hay phát minh tài ba.</li>\n                        <li>Người số 11 là những người nhạy cảm, đầy cảm xúc và đầy quan tâm người khác. Họ yêu thích những gì tinh tế, vẻ đẹp và mọi điều về chiều sâu của những giá trị văn hóa, và vô cùng thật thà và giàu tình cảm, thường tránh đời sống kinh doanh quá mệt nhọc.</li>\n                    </ul>";
        }
    var s = 0,
        y = 0;
    e.map(function (h) {
        arrUEOAI.includes(h)
            ? arrApal.map(function (i, t) {
                  i.includes(h) && ((s += t + 1), n.push(t + 1));
              })
            : arrApal.map(function (i, t) {
                  i.includes(h) && ((y += parseInt(t) + 1), n.push(t + 1));
              });
    }),
        (s = tinhNgaySinh(s)),
        (y = tinhNgaySinh(y));
    var b = `\n        <h3>Số của tâm hôn: ${s}</h3>\n        <ul>\n    `;
    arrTamHom[s - 1].map(function (n, h) {
        b += `<li>${n}</li>`;
    }),
        (b += "</ul>"),
        (document.querySelector("#showTamHon").innerHTML = b);
    var p = `\n        <h3>Số của thể hiện: ${y}</h3>\n        <ul>\n    `;
    arrTheHien[y - 1].map(function (n, h) {
        p += `<li>${n}</li>`;
    }),
        (p += "</ul>"),
        (document.querySelector("#showTheHien").innerHTML = p);
    var k = "";
    for (let h = 1; h < 10; h++) {
        var d = 0,
            S = "";
        n.map(function (n) {
            n == h && ((S += h), d++);
        }),
            d > 2 && (d = 3),
            (k += `<li>Con số ${h}: ${table[h - 1][d]}</li>`),
            (document.querySelector(`#number${h}`).innerHTML = S);
    }
    document.querySelector("#showResultOfTable").innerHTML = k;
    var q = tinhNgaySinh(tinhNgaySinh(u)),
        N = tinhNgaySinh(r),
        f = tinhNgaySinh(tinhNgaySinh(tinhNgaySinh(o))),
        T = tinhNgaySinh(tinhNgaySinh(tinhNgaySinh(q + N))),
        M = tinhNgaySinh(tinhNgaySinh(tinhNgaySinh(q + f))),
        H = tinhNgaySinh(tinhNgaySinh(tinhNgaySinh(T + M))),
        $ = tinhNgaySinh(tinhNgaySinh(tinhNgaySinh(N + f))),
        C = 36 - m,
        L = C + 9,
        w = L + 9,
        D = w + 9;
    document.querySelector("#ShowCacDinh").innerHTML = `\n        <li>Đỉnh 1 năm ${C} tuổi là số ${T}: ${arrDinhNam[T - 1]}</li>\n        <li>Đỉnh 2 năm ${L} tuổi là số ${M}: ${
        arrDinhNam[M - 1]
    }</li>\n        <li>Đỉnh 3 năm ${w} tuổi là số ${H}: ${arrDinhNam[H - 1]}</li>\n        <li>Đỉnh 4 năm ${D} tuổi là số ${$}: ${arrDinhNam[$ - 1]}</li>\n    `;
    var x = new Date(),
        K = parseInt(x.getFullYear()),
        B = tinhNgaySinh(tinhNgaySinh(tinhNgaySinh(K) + r + u)),
        I = [...bieuDo.date];
    for (let n = 0; n < 10; n++) {
        I[n] += K + (n - B);
    }
    var A = `<h4>Con số của bạn là: ${B}</h4>`;
    for (let n = 0; n < 9; n++) A += `<li>Số ${n + 1} từ ngày ${I[n]} đến ${I[n + 1]}: ${bieuDo.means[n]}</li>`;
    document.querySelector("#showNamPerson").innerHTML = A;
});
