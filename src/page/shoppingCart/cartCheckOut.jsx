import { useState } from 'react';
import '../../style/Takk.css'
import bag from '../../img/picbag.webp'
import box from '../../img/picbox.webp'
import CartCheckCards from '../../components/cartCheckCards';
import axios from 'axios';

const CartCheckOut = ({ cartItems, selectPackage, onNext, onBack, setOrderId, setCreatedAt }) => {
    const [status, setStatus] = useState(true) // member:true guest:false
    const memberClick = () => setStatus(true)
    const guestClick = () => setStatus(false)

    const [second, setSecond] = useState(false) // true:顯示宅配 false:不顯示宅配
    const [moving, setMoving] = useState(false) // true:顯示 false:不顯示
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [selectedCity, setSelectedCity] = useState('')
    const [selectedDistrict, setSelectedDistrict] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [address, setAddress] = useState('')
    const [cities] = useState([
        {
            name: '台北市', districts: [
                { name: '中正區', zipcode: '100' },
                { name: '大同區', zipcode: '103' },
                { name: '松山區', zipcode: '105' },
                { name: '大安區', zipcode: '106' },
                { name: '信義區', zipcode: '110' },
                { name: '士林區', zipcode: '111' },
                { name: '北投區', zipcode: '112' },
                { name: '內湖區', zipcode: '114' },
                { name: '南港區', zipcode: '115' },
                { name: '文山區', zipcode: '116' }
            ]
        },
        {
            name: '新北市', districts: [
                { name: '板橋區', zipcode: '220' },
                { name: '三峽區', zipcode: '384' },
                { name: '汐止區', zipcode: '221' },
                { name: '中和區', zipcode: '235' },
                { name: '永和區', zipcode: '234' },
                { name: '新莊區', zipcode: '242' },
                { name: '蘆洲區', zipcode: '247' },
                { name: '五股區', zipcode: '248' },
                { name: '三芝區', zipcode: '252' },
                { name: '泰山區', zipcode: '243' },
                { name: '樹林區', zipcode: '238' },
                { name: '鶯歌區', zipcode: '239' },
                { name: '淡水區', zipcode: '251' },
                { name: '八里區', zipcode: '249' }
            ]
        },
        {
            name: '桃園市', districts: [
                { name: '桃園區', zipcode: '330' },
                { name: '中壢區', zipcode: '320' },
                { name: '平鎮區', zipcode: '324' },
                { name: '八德區', zipcode: '334' },
                { name: '龍潭區', zipcode: '325' },
                { name: '觀音區', zipcode: '328' },
                { name: '大園區', zipcode: '337' },
                { name: '蘆竹區', zipcode: '338' }
            ]
        },
        {
            name: '台中市', districts: [
                { name: '西區', zipcode: '403' },
                { name: '南區', zipcode: '402' },
                { name: '北區', zipcode: '404' },
                { name: '東區', zipcode: '401' },
                { name: '南屯區', zipcode: '402' },
                { name: '西屯區', zipcode: '407' },
                { name: '大里區', zipcode: '404' },
                { name: '太平區', zipcode: '411' },
                { name: '龍井區', zipcode: '434' },
                { name: '沙鹿區', zipcode: '433' },
                { name: '大肚區', zipcode: '432' },
                { name: '梧棲區', zipcode: '435' },
                { name: '清水區', zipcode: '436' },
                { name: '霧峰區', zipcode: '413' }
            ]
        },
        {
            name: '台南市', districts: [
                { name: '中西區', zipcode: '700' },
                { name: '東區', zipcode: '701' },
                { name: '南區', zipcode: '702' },
                { name: '北區', zipcode: '704' },
                { name: '安平區', zipcode: '708' },
                { name: '安南區', zipcode: '709' },
                { name: '永康區', zipcode: '710' },
                { name: '歸仁區', zipcode: '711' },
                { name: '新化區', zipcode: '712' },
                { name: '左鎮區', zipcode: '713' }
            ]
        },
        {
            name: '高雄市', districts: [
                { name: '苓雅區', zipcode: '802' },
                { name: '鼓山區', zipcode: '804' },
                { name: '三民區', zipcode: '807' },
                { name: '前鎮區', zipcode: '806' },
                { name: '旗津區', zipcode: '805' },
                { name: '小港區', zipcode: '812' },
                { name: '左營區', zipcode: '813' },
                { name: '大寮區', zipcode: '831' },
                { name: '鳳山區', zipcode: '830' },
                { name: '仁武區', zipcode: '814' }
            ]
        },
        {
            name: '基隆市', districts: [
                { name: '仁愛區', zipcode: '200' },
                { name: '信義區', zipcode: '201' },
                { name: '中正區', zipcode: '202' },
                { name: '暖暖區', zipcode: '203' },
                { name: '七堵區', zipcode: '204' }
            ]
        },
        {
            name: '新竹市', districts: [
                { name: '東區', zipcode: '300' },
                { name: '北區', zipcode: '300' },
                { name: '香山區', zipcode: '300' }
            ]
        },
        {
            name: '苗栗縣', districts: [
                { name: '苗栗市', zipcode: '360' },
                { name: '通霄鎮', zipcode: '357' },
                { name: '竹南鎮', zipcode: '350' },
                { name: '龍潭鄉', zipcode: '366' },
                { name: '後龍鎮', zipcode: '358' }
            ]
        },
        {
            name: '彰化縣', districts: [
                { name: '彰化市', zipcode: '500' },
                { name: '鹿港鎮', zipcode: '505' },
                { name: '和美鎮', zipcode: '508' },
                { name: '田中鎮', zipcode: '520' },
                { name: '伸港鄉', zipcode: '511' }
            ]
        },
        {
            name: '南投縣', districts: [
                { name: '南投市', zipcode: '540' },
                { name: '草屯鎮', zipcode: '542' },
                { name: '埔里鎮', zipcode: '545' },
                { name: '仁愛鄉', zipcode: '546' },
                { name: '名間鄉', zipcode: '553' }
            ]
        },
        {
            name: '雲林縣', districts: [
                { name: '斗六市', zipcode: '640' },
                { name: '西螺鎮', zipcode: '648' },
                { name: '古坑鄉', zipcode: '646' },
                { name: '虎尾鎮', zipcode: '632' },
                { name: '斗南鎮', zipcode: '631' }
            ]
        },
        {
            name: '嘉義縣', districts: [
                { name: '太保市', zipcode: '612' },
                { name: '朴子市', zipcode: '613' },
                { name: '大林鎮', zipcode: '616' },
                { name: '嘉義市', zipcode: '600' }
            ]
        },
        {
            name: '嘉義市', districts: [
                { name: '東區', zipcode: '600' },
                { name: '西區', zipcode: '600' }
            ]
        },
        {
            name: '屏東縣', districts: [
                { name: '屏東市', zipcode: '900' },
                { name: '三地門鄉', zipcode: '901' },
                { name: '獅子鄉', zipcode: '902' },
                { name: '內埔鄉', zipcode: '903' },
                { name: '恆春鎮', zipcode: '946' }
            ]
        },
        {
            name: '宜蘭縣', districts: [
                { name: '宜蘭市', zipcode: '260' },
                { name: '羅東鎮', zipcode: '265' },
                { name: '蘇澳鎮', zipcode: '270' },
                { name: '冬山鄉', zipcode: '269' },
                { name: '頭城鎮', zipcode: '261' }
            ]
        },
        {
            name: '花蓮縣', districts: [
                { name: '花蓮市', zipcode: '970' },
                { name: '鳳林鎮', zipcode: '974' },
                { name: '吉安鄉', zipcode: '973' },
                { name: '秀林鄉', zipcode: '972' },
                { name: '瑞穗鄉', zipcode: '975' }
            ]
        },
        {
            name: '台東縣', districts: [
                { name: '台東市', zipcode: '950' },
                { name: '成功鎮', zipcode: '961' },
                { name: '鹿野鄉', zipcode: '955' },
                { name: '海端鄉', zipcode: '956' },
                { name: '池上鄉', zipcode: '957' }
            ]
        },
        {
            name: '澎湖縣', districts: [
                { name: '馬公市', zipcode: '880' },
                { name: '西嶼鄉', zipcode: '881' },
                { name: '望安鄉', zipcode: '882' },
                { name: '七美鄉', zipcode: '883' },
                { name: '白沙鄉', zipcode: '884' }
            ]
        },
        {
            name: '金門縣', districts: [
                { name: '金城鎮', zipcode: '893' },
                { name: '金湖鎮', zipcode: '891' },
                { name: '金寧鄉', zipcode: '892' },
                { name: '烈嶼鄉', zipcode: '890' }
            ]
        },
        {
            name: '連江縣', districts: [
                { name: '南竿鄉', zipcode: '880' },
                { name: '北竿鄉', zipcode: '881' },
                { name: '莒光鄉', zipcode: '882' },
                { name: '東引鄉', zipcode: '883' }
            ]
        }
    ])

    const onCheckOut = () => {
        const ship = {
            lastName,
            firstName,
            phoneNumber,
            city: selectedCity,
            district: selectedDistrict,
            zipcode,
            address
        }
        localStorage.setItem('ship', JSON.stringify(ship))
    }

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value)
        setSelectedDistrict('')
        setZipcode('')
    }

    const handleDistrictChange = (e) => {
        const district = e.target.value
        setSelectedDistrict(district)
        const selectedDistrictData = cities.find(city => city.name === selectedCity)?.districts.find(d => d.name === district)
        setZipcode(selectedDistrictData?.zipcode || '')
    }

    const guestNext = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('"請輸入有效的電子郵件地址"')
            setTimeout(() => {
                setError('')
            }, 3000)
            return
        }
        const guestId = Math.random().toString(36).substring(2, 10)
        const guestData = {guest_id: guestId , guest_email: email}
        localStorage.setItem('guestUser', JSON.stringify(guestData))

        setError('')
        goClick()
    }

    const memberNext = () => {
        goClick()
    }

    const goClick = () => {
        setSecond(true)
        setMoving(true)
    }

    const backClick = () => {
        setSecond(false)
        setMoving(false)
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        const hours = String(date.getHours()).padStart(2, '0')
        const minutes = String(date.getMinutes()).padStart(2, '0')
        const seconds = String(date.getSeconds()).padStart(2, '0')
    
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
    }

    const onNextandCheckOut = async() => {
        try {
            onCheckOut()
            const guestUser = JSON.parse(localStorage.getItem('guestUser')) || {}
            const guestCart = JSON.parse(localStorage.getItem('guestCart')) || []
            const productPackage = localStorage.getItem('productPackage')
            const ship = JSON.parse(localStorage.getItem('ship')) || {}
            const total = localStorage.getItem('total')
            const orderData = {
                guestUser,
                guestCart,
                productPackage,
                ship,
                total
            }
            
            const response = await axios.post('http://localhost:8000/api/orders', orderData)  
            const {order_id, createdAt} = response.data

            setOrderId(order_id)
            setCreatedAt(formatDate(createdAt))

            localStorage.removeItem('guestUser')
            localStorage.removeItem('guestCart')
            localStorage.removeItem('productPackage')
            localStorage.removeItem('ship')
            localStorage.removeItem('total')

            onNext()
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className="horizontally cartMargin">
            <div className="cartRight deliveryWidth">
                {/* 登入 */}
                {!second && (
                    <div>
                        {/* 會員/訪客 */}
                        <div>
                            <ul className="noBullets horizontallyCenter">
                                <li className={"cartLoginLi"}
                                    onClick={memberClick}
                                >
                                    <h2 className="cartLoginHeader" style={{ color: status ? 'black' : '#ccc' }}>
                                        會員登入
                                    </h2>
                                </li>
                                <li className="cartLoginLi"
                                    onClick={guestClick}
                                >
                                    <h2 className="cartLoginHeader" style={{ color: status ? '#ccc' : 'black' }}>
                                        訪客
                                    </h2>
                                </li>
                            </ul>
                        </div>
                        {/* HoverLine */}
                        <div>
                            <ul className="noBullets horizontally">
                                <li className="cartLoginLine" style={{ backgroundColor: status ? 'black' : '#ccc' }} />
                                <li className="cartLoginLine" style={{ backgroundColor: status ? '#ccc' : 'black' }} />
                            </ul>
                        </div>
                        {/* 會員輸入/訪客輸入 */}
                        <div>
                            {/* 會員 */}
                            {status && (
                                <div>
                                    <div className="horizontallyCenter cartLoginMargin">
                                        <p>歡迎回來。登入並繼續完成至商品配送。</p>
                                    </div>
                                    <div>
                                        <div className="horizontallyCenter cartLoginMargin">
                                            <input type="email" placeholder="電子郵件或手機號碼" />
                                        </div>
                                        <div className="horizontallyCenter cartLoginMargin">
                                            <input type="password" placeholder="密碼" />
                                        </div>
                                        <div className="horizontallyCenter cartLoginMargin">
                                            <div>
                                                <span>忘記密碼?</span>
                                            </div>
                                        </div>
                                        <div className="horizontallyCenter">
                                            <button onClick={memberNext}>登入</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/* 訪客 */}
                            {!status && (
                                <div>
                                    <div className="cartLoginMargin">
                                        <p className="horizontallyCenter">
                                            輸入您的電子郵件並以訪客身分繼續，
                                        </p>
                                        <p className="horizontallyCenter">
                                            您可在訂購完成後建立帳戶。
                                        </p>
                                    </div>
                                    <div>
                                        <div className="horizontallyCenter cartLoginMargin">
                                            <input type="email"
                                                   placeholder="電子郵件"
                                                   value={email}
                                                   onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className='horizontallyCenter cartLoginMargin'>
                                            {error && <div className='checkOutError'>{error}</div>}
                                        </div>
                                        <div className="horizontallyCenter cartLoginMargin">
                                            <button onClick={guestNext}>繼續前往付款</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                {/* 配送 */}
                {second && (
                    <div>
                        {/* 返回登入 */}
                        <div>
                            <div className="horizontally">
                                <h2 style={{ marginBottom: '10px' }}>登入</h2>
                            </div>
                            <ul className="noBullets">
                                <li className="orderLine"></li>
                            </ul>
                        </div>
                        {/* 配送輸入 */}
                        <div className={`deliveryMoving ${moving ? 'slide-in' : 'slide-out'}`}>
                            <div>
                                <div className="horizontally">
                                    <h2 style={{ marginBottom: '10px' }}>配送</h2>
                                </div>
                                <ul className="noBullets">
                                    <li className="orderLine"></li>
                                </ul>
                            </div>
                            {/* 配送資料 */}
                            <div className='vertical cartMargin deliveryBottom'>
                                <div className='horizontallySpaceBetween'>
                                    <div className='verticalEnd deliveryWidth'>
                                        <p>姓氏</p>
                                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                    </div>
                                    <div className='verticalEnd deliveryWidth'>
                                        <p>名字</p>
                                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                    </div>
                                </div>
                                <div className='verticalEnd deliveryWidth cartRight'>
                                    <p>電話號碼</p>
                                    <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                </div>
                                <div className='horizontallySpaceBetween'>
                                    <div className='verticalEnd deliveryWidth'>
                                        <p>縣市</p>
                                        <select value={selectedCity} onChange={handleCityChange}>
                                            <option value="">請選擇縣市</option>
                                            {cities.map((city, index) => (
                                                <option key={index} value={city.name}>{city.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='verticalEnd deliveryWidth'>
                                        <p>鄉鎮市區</p>
                                        <select value={selectedDistrict} onChange={handleDistrictChange} disabled={!selectedCity}>
                                            <option value="">請選擇鄉鎮市區</option>
                                            {selectedCity && cities.find(city => city.name === selectedCity).districts.map((district, index) => (
                                                <option key={index} value={district.name}>{district.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className='verticalEnd deliveryWidth cartRight'>
                                    <p>郵遞區號</p>
                                    <input type="text"
                                        value={zipcode}
                                        readOnly
                                    />
                                </div>
                                <div className='verticalEnd deliveryWidth cartRight'>
                                    <p>地址</p>
                                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                                </div>
                            </div>
                            <div className='horizontallyCenter cartBottom'>
                                <button onClick={onNextandCheckOut}>前往付款</button>
                            </div>
                            <div className='horizontallyCenter cartBottom'>
                                <button onClick={backClick}>返回</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="cartLeft deliveryWidth">
                <div>
                    <div className="horizontally">
                        <h2 className='cardTitle'>訂單摘要</h2>
                        <div className="verticalEnd cartLeft">
                            {/* 回到 Order */}
                            <span className='changeLink' onClick={onBack}>編輯</span>
                        </div>
                    </div>
                    <ul className="noBullets">
                        <li className="orderLine"></li>
                    </ul>
                </div>
                {/* each所選商品資料 */}
                <div>
                    <CartCheckCards cartItems={cartItems} />
                </div>
                <div>
                    <div className="horizontally">
                        <h2 className='cardTitle'>包裝</h2>
                    </div>
                    <ul className="noBullets">
                        <li className="orderLine"></li>
                    </ul>
                </div>
                {/* 顯示選擇的包裝 */}
                <div>
                    <div className="packageBar">
                        <ul className="noBullets">
                            {selectPackage ? (
                                <li className="packageBorder">
                                    <img src={bag} alt='' className="cartImg" />
                                    <div className="horizontallyCenter packageLable" style={{paddingLeft:'15px'}}>
                                        <h4>簡約包裝</h4>
                                        <p>使用可回收材質，並內含有機棉收納袋。</p>
                                    </div>
                                </li>
                            ) : (
                                <li className="packageBorder">
                                    <img src={box} alt='' className="cartImg" />
                                    <div className="horizontallyCenter packageLable" style={{paddingLeft:'15px'}}>
                                        <h4>經典包裝</h4>
                                        <p>經典禮盒或禮袋。</p>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartCheckOut;