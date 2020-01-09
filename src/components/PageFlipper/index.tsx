import React, { useCallback, useEffect, useState, useRef } from 'react'
import './index.scss'
import $ from 'jquery'
import { apidetail} from '../../api/index'
let str = "\n<p>长白山的天池向来有水怪的传说，但都是些捕风捉影的消息，并不能信服悠悠众口，然而这一次……</p><p>“你真的要去吗？”江杰担心的问道。</p><p>“嗯，这次感觉，比以往要来的强烈。”七荒深吸一口气道：“天池里的怪物这次可能要露出真身了，也许我们要揭开这近代史上的一大谜团了。”</p><p>“可是...”江杰还想说什么。</p><p>“好了，不用担心。”七荒拍了拍江杰的肩。</p><p>“我知道你在担心什么，不过这一次，情况非比寻常，你就别去了，让我一个人去吧!”</p><p>“那怎么行，要去咱们一起去，兄弟这么多年，什么时候怂过的？”江杰有些急了。</p><p>看着眼前有些激动江杰，七荒心里忽的浮起一丝感动。</p><p>“小杰，你信我吗？”七荒看着江杰平静的问道。</p><p>--废话，我们是兄弟，从小一起长大，我们比亲兄弟还亲啊，正因为这样，我才不想让你去冒险，这段时间的天池实在是太诡异了，好多去天池的人，回来都精神失常了，连医院都查不出来结果啊。”</p><p>七荒一时有些沉默，也难怪江杰反应这么激烈。</p><p>的确，近来天池不太平，不过这事还得从上个月说起。</p><p>据说从上个月开始，每到月光皎洁的深夜里，天池里就会传出来奇怪的水声，声音持续，悠长，传遍了整个长白山，却又不见生物活动之痕迹。</p><p>这事引起了长白山工作人员的注意，起初有巡夜的工作人员以为是自己的幻听，可是连续好多天，都出现了这样的声音，便通知自己的同事，起初大家都不信，纷纷聚众守夜，所有人都听到了这样的声音，众人这才不得不相信，天池有异诞。</p><p>有老一辈的人说，那是天池里有住着鱼仙子，满月的时候出来吸收月之精华，也有人说那是住在天池里的水怪，在夜深人静的时候出来悠闲透气。</p><p>一时间众说纷纭，不过却都有一个共同的说法，生态和平，切勿去打扰。</p><p>世上没有不透风的墙，不知是有意还是无意，天池深夜有异变的消息不胫而走，许多人闻讯赶来，据说还有不止一个专家带领团队，驻扎天池周围，想揭开这个谜团，但是诡异的事件也由此开始了。</p><p>在七月末的这一天，也就是几支考场队上山的第四天，这天早上，天还不是很亮，山脚下还缠着大雾，一众工作人员，远远的就看见数支专家团队，从山上走下来，一个个目光呆滞，丢了魂似的，仿佛行尸走肉，当他们刚走下山脚，便一个接着一个，扑通扑通摔倒在地上，人事不省，与当初那几个斗胆夜探天池的巡夜人员如出一辙。</p><p>一众工作人员赶紧拨打120，来了十几辆救护车，众人七手八脚的将人抬上了车，救护车一路疾驰回到医院，几支专家考察小队在医院经历了一系列的检查，除了一行人身上被不知名的蚊子咬了几个疙瘩之外，并未其他明显的外伤。</p><p>脑部CT也一切正常，血液也没有查出来异常，身体各项指标也一切正常，可人就是昏迷不醒，辗转了几家医院，众医生都束手无策。</p><p>如此又过了三天，众人才一个接一个的苏醒过来，除了长时间昏迷有些虚弱之外，好像身体上也没啥毛病，一群医生也不明白是个什么情况。</p><p>有媒体闻讯赶来采访，诡异的是，一群考察人员，却什么也不记得了，只记得上了天池之后，各自小队架起了拍摄仪器，后来……后来……就什么也想不起来了，3天时间了发生了什么，后来是怎么下的山，大家都是一点印象都没有。</p><p>众媒体找到长白山天池的工作人员，可是工作人员反应，并没有在天池周围发现考察团队遗留的摄影器材，白天上山的游客，也并没有发现考察团队留下的东西。</p><p>由于天池里水声总是在半夜传出来，而白天一切如常，所以，这并有没让那些来长白山观赏的游客产生恐惧心理，相反这次的神秘事件为天池更添上了一层神秘的面纱。</p><p>来天池旅游的人更是络绎不绝，景点的工作人员，也是提醒大家一定要在天黑之前下山，如此也相安无事。</p><p>可是，这世上总会有人不信邪的。</p><p>一位声称国内权威的考察专家，号召国内志同道合的人一同前去查探天池，并且向当地**申请调配少许警力跟随，声称要带领大家一起揭开天池的水怪之谜。</p><p>就在八月初八的这天上午，这位名叫王天文的权威专家，在媒体面前信誓旦旦的夸下海口，声称自己一定会为大家解密真相，因为自己有目前巅峰的探测仪器，和经验丰富的团队，天池里的神秘生物，定会在自己这支团队的火眼金睛下现出原形。</p><p>一众媒体目送着，以王天文马首是瞻的一群人浩浩荡荡的上了山。</p><p>起初，一切还进展顺利，天气似乎也特别的配合这位权威专家。</p><p>王天文气定神闲，指挥若定，时不时的推一下鼻梁上的金丝眼镜，有条不紊的给大家安排工作，让大家把各种各样大大小小的探测器安置在水中，还偶尔在镜头面前露个脸，讲解一下各类仪器的妙用，并且还安抚网上看直播的网友们，稍安勿躁，耐心等待真相。</p><p>就在八月出八的这天晚上，万众瞩目，全民都在刷王天文专家团队的直播，上亿的观众差点让服务器崩溃。</p><p>正值午夜12点的时候，直播间的人气已经达到了巅峰，因为传说中天池里诡异的水声就快传出来了。</p><p>王天文一行人聚精会神的盯着探视镜头，反馈的画面，直播的镜头也早以对准了湖面，大约又过了快1个小时，将近凌晨1点了，湖里似乎传来了什么动静。</p><p>顿时直播间被弹幕淹没。</p><p>“来了”</p><p>“来了”</p><p>“来了，等你很久了。”</p><p>.........</p><p>现场的一群人立马打起精神，不错，这一刻要来了，就是见证历史的一刻，王天文甚至已经激动紧了拳头，紧紧的盯着屏幕，还时不时的看向湖面。</p><p>哗啦啦...像是有什么生物，浮出水面，湖里传出声响。</p><p>哗哗哗的声音一阵阵传来，好像有什么生物在水里翻腾，不止现场的人听到了，连看直播的观众都隐约听到了。</p><p>“到底是什么东西?’</p><p>“咱也不知道啊’</p><p>“我猜是一条大鱼”</p><p>“我猜是一只大乌龟吧！”</p><p>“我赌10包辣条，肯定是活物来的”</p><p>“切“</p><p>“废话”</p><p>.......</p><p>一时间，直播间里炸了锅，各种各样的假想，猜测，大胆的假设，层出不穷。</p><p>然而与直播间截然相反的是，现场的王天文这一行人，竟无一人开口说话，连原本担当现场解说的领头人王天文，仿佛丢了魂一样的。</p><p>一个个呆若木鸡，眼神空洞，哗哗的水声从湖里一阵阵的传出来，在皎洁的月光下，而天池的水面却是异常的平静。</p><p>是的，异于平常的平静，天池的水仿佛是一面镜子，映照出天空的明月，洁白而圣洁。</p><p>不知何时，探测仪的反馈屏幕，已变成了满屏的雪花条纹，一台两台，慢慢的周围的全都是这样了。</p><p>这就意味着放入水中的探测仪已经全部被破环，可是一旁的一些专家，探测员，武警，似乎都没有察觉到这一情况，都直勾勾的盯着那异常平静的湖面。</p><p>“情况好像不太对呀。”终于有观看直播的网友发现了异常。</p><p>“这湖面上什么东西都没有啊”</p><p>“对呀，说好的水怪呢？除了有点水声，啥玩意也没瞅着啊。”</p><p>“对呀，对呀，专家，你快来解释一下啊，这到底是怎么回事啊？”</p><p>终于有人发现了不对劲。</p><p>“这些人是怎么了，怎么都没反应啊？”</p><p>“不会是被吓傻了吧，哈哈...”更有网友如此评论道。</p><p>看热闹的都不嫌事大，上亿观众议论纷纷。</p><p>可是接下来诡异的一幕，可以说是让今晚的观众，终生难忘了。</p><p>那本是背对着直播镜头的，权威专家王天文，却突然转过脸来，凑到了镜头面前。</p><p>那王天文，右嘴角微撇，竟然对着镜头露出了一个极为阴森恐怖的笑容。</p><p>更可怕的是那鼻梁上的金丝眼镜，不知何时竟不翼而飞，那空洞无神的眼窝里缓缓的冒出两团绿光，一块翻盖的假发，耷拉在左耳，露出那光秃秃的地中海。</p><p>“呵呵...”仿佛来自九幽地狱的声音从王天文嘴里发出。</p><p>夜晚，直播的镜头，不知何故，竟格外的清晰，王天文跟个厉鬼一样，站在镜头前。</p><p>“啊——”</p><p>大部分的观众都被突来的景象，吓得尖叫起来，还有不少观看直播的小孩，女孩直接被吓得失声大哭。</p><p>一些男同胞也好不到哪里去，有的被吓得手机摔在了地上，有的被吓得一拳砸穿了电脑显示屏，更有甚者被当场吓晕在寝室，被室友慌忙掐人中，才缓缓的顺过气来。</p><p>不料一醒来，却看见王天文周围的一群人，纷纷侧过头来，个个眼睛里都散发出绿色的光芒，都带着一丝诡异的微笑，那模样像极了一群恶魔。</p><p>这位刚被救醒的少年，被吓的大叫一声，头一歪，人一软，彻底的晕了过去。</p><p>其他的观众也好不到哪去，有的刚捡起摔在地上的手机，还没来的及庆幸手机的完好，又被这群人突如其来的回眸一瞥，吓得把手机丢出去更远，好吧，这下是真摔坏了。</p><p>观看直播的人皆哀嚎连天，说当初看贞子都没被吓得这么惨，如今却被这些人差点吓尿。</p><p>就在观众们心神不宁，惊魂未定的时候，直播的画面顿时剧烈的晃动了起来。</p><p>有人看见是一双手，也有人说看见了好几只手，把直播镜头拔了。</p><p>直播突然中断，天池的水怪之谜也并没有如愿揭晓，这一夜，上亿网友彻夜难眠。</p>\n"


function PageFlipper() {
    let [content, setcontent] = useState('')
    let [turnPageArr, setturnPageArr] = useState([])
    let [books, setbooks] = useState([])
    let [currentpage, setcurrentpage] = useState(0)
    let [showSetting, setshowSetting] = useState(false)
    let settingRef = useRef(null)

    let baC = [
        {
            background: '#f8c291',
            color: '#000'
        },
        {
            background: '#82ccdd',
            color: '#000'
        },
        {
            background: '#2f3542',
            color: '#fff'
        }
    ]

    useEffect(() => {
        if (!turnPageArr.length) return 
        if (showSetting) {
            $('.setting-wrap').css('bottom', '0')
        } else {
            let h = settingRef.current.offsetHeight
            $('.setting-wrap').css('bottom', `-${h}px`)
        }
    }, [showSetting])

    const S = useCallback(() => {
        let dH = document.documentElement.clientHeight
        let pH = 0
        let index = 0
        for (let i = 0; i < $('.pageflipper-tip p').length; i++) {
            if (pH > (dH - 30)) return index
            let p = $('.pageflipper-tip p').eq(i).height()
            pH += p
            index = i
        }
    }, [content])

    const SubEdition = () => {
        let strArr = content.split('</p>')
        let current = S()
        console.log(current)
        if (!current) return
        let pushnow = strArr.filter((item, index) => {
            return index < current
        })
        let newStrArr = ''
        pushnow.forEach(item => {
            newStrArr += item + '</p>'
        })
        setturnPageArr([
            ...turnPageArr,
            newStrArr
        ])
        let filternow = strArr.filter((item, index) => {
            return index >= current
        })
        let filterStrArr = ''
        filternow.forEach(item => {
            filterStrArr += item + '</p>'
        })
        setcontent(filterStrArr)
    }

    // useEffect(() => {
    //     apidetail().then(res => {
    //         console.log(res)
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }, [])



    useEffect(() => {
        SubEdition()
    }, [content, books])



    const upper = (s) => {
        let n = s.toString()
        if (!/(^[1-9]\d*$)/) {
            return '非法数字';
        }
        var uppercase = '千百亿千百十万千百十个';
        var nLength = n.length;
        var newStr = '';
        if (uppercase.length - nLength < 0) {
            return '数字过长';
        }
        uppercase = uppercase.substr(uppercase.length - nLength);
        for (var i = 0; i < nLength; i++) {
            newStr += `${''}一二三四五六七八九`.charAt(n[i]) + uppercase.charAt(i);
        };
        newStr = newStr.substr(0, newStr.length - 1);
        return newStr;
    }

    const ChannelMergerNode = (e) => {
        const files = e.target.files;
        let crr = []
        if (files && files[0]) {
            const file = files[0];
            var reader = new FileReader();
            reader.readAsText(file, 'gb2312')
            reader.onload = function (e: any) {
                let txt = e.target.result
                let arr = txt.split(/第[\u4e00-\u9fa5]*章/).filter((item, index) => {return index != 0})
                arr.forEach((item, index) => {
                    let obj = {}
                    let s = item.split(/\s{5}/)
                    obj['title'] = `第${upper(index + 1)}章` + s[0]
                    let ok= s.filter((item, index) => {return index != 0}).join('')
                    console.log()
                    let ojbk = ok.split('。').map(it => {
                        return it = '<p>' + it + '</p>'
                    })
                    obj['content'] = ojbk.join('')
                    crr.push(obj)
                })
                setcontent(crr[0].content)
                setbooks(crr)
            }
        }
    }

    useEffect(() => {
        if (books.length) {
            setcontent(books[currentpage].content)
        }
    }, [currentpage])


    const pageTurning = useCallback((e, index) => {
       
        let currentC = e.clientX
        let docW = document.documentElement.clientWidth
        if (currentC < 80) {
            if (index == 0) return
            if (Number(index + 1)) {
                $(".pageflipper-tips").eq(index - 1).attr({
                    'style': `left: ${0}px; z-index: ${turnPageArr.length - index + 1 }`,
                })
            } else {
                $(".pageflipper-tips").eq(turnPageArr.length - 2).attr({
                    'style': `left: ${0}px; z - index: ${turnPageArr.length - index + 1 }`,
                })
            }
        }
        if (currentC > docW - 80) {
            if (index == turnPageArr.length - 1) {
                setcurrentpage(currentpage + 1)
            }
            $(".pageflipper-tips").eq(index).attr({
                'style': `left: ${-(document.documentElement.clientWidth + 10)}px; z-index: ${turnPageArr.length - index}`,
            })
        }
        
        
    }, [turnPageArr])

    const changeBac = (index) => {
        let arr = ['one', 'two', 'three']
        arr.forEach(item => {
            $(".pageflipper-tips").removeClass(`${item}`);
        })
        $(".pageflipper-tips").addClass(`${arr[index]}`);
    }
    return <>
        <div className="pageflipper-wrap" onClick={(e) => {
            e.stopPropagation()
            setshowSetting(!showSetting)
        }}>
            <div className="pageflipper-tip" dangerouslySetInnerHTML={{ __html: content }} ></div>
            {
                turnPageArr.map((item, index) => {
                    return (
                        <div className="pageflipper-tips" dangerouslySetInnerHTML={{ __html: item }} style={{ zIndex: turnPageArr.length - index }} key={index} onClick={(e) => {
                            e.stopPropagation()
                            pageTurning(e, index)
                        }}>
                            {/* {item} */}
                        </div>
                    )
                })
            }

            {
                turnPageArr.length ? null
                : <input type="file" onChange={(e) => {
                        e.stopPropagation()
                    ChannelMergerNode(e)
                }}/>
            }
            {
                turnPageArr.length ? 
                    <div className="setting-wrap" ref={settingRef} onClick={(e) => { e.stopPropagation() }}>
                        <div className="setting-bcolor">
                            {
                                baC.map((item, index) => {
                                    return (
                                        <div className="s-b-tip" style={{ background: item.background, color: item.color }} onClick={(e) => {
                                            e.stopPropagation()
                                            changeBac(index)
                                        }}>

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                :
                null
            }
            
        </div>
    </>
}

export default PageFlipper