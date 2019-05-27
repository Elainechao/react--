// 创建一个自执行函数，用来防止全局变量的污染
(function (){
    // 因为实例化出来的实力如果保持在一个全局变量中的时候，虽然保证了每一次的使用，但是很可能会因为一些疏忽导致变量重写的问题
    // 所以我们在每次想使用这个实例时都去new，保证每次new出来的都是同一个实例
    // 只适合只需要有一个实例的场景，这种模式叫单例模式
    // 最终的单利模式实现后的类，播放器的类
    class Player{
        constructor(){
        // 如果Player类已经有实例了，那就返回这个实例，否则创建实例并返回
            return Player.instance  || this.createInstance(arguments)
        }
        createInstance(){
            // 在没有实例的情况创建实例的方法
            let instance =new PlayerInstance(arguments)     //创建实例
            Player.instance = instance  //将实例挂在Player类上作为唯一的实例
            return Player.instance
        }
    
    }
    //创建音乐数据类
    class Music{
        constructor(){
            this.songList=[
            { id: 1, name: '丑八怪', singer: '薛之谦', src: './songs/丑八怪 - 薛之谦.mp3', imageUrl: './images/songs/choubaguai.jpg' },
            { id: 2, name: '演员', singer: '薛之谦', src: './songs/演员 - 薛之谦.mp3', imageUrl: './images/songs/yanyuan.jpg' },
            { id: 3, name: '绅士', singer: '薛之谦', src: './songs/绅士 - 薛之谦.mp3', imageUrl: './images/songs/shenshi.jpg' },
            { id: 4, name: '认真的雪', singer: '薛之谦', src: './songs/认真的雪 - 薛之谦.mp3', imageUrl: './images/songs/renzhendexue.jpg' }
            ]
        }
        getSongList(){
            // 保存类实例的私有数据
            return this.songList
        }
        // 创建按钮的类，可以更方便的获取按钮并绑定事件
        class 
    }
})();