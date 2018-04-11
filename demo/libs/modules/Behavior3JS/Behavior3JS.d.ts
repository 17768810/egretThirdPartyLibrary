declare namespace b3{
    var VERSION:string;
    
    var SUCCESS:number;
    var FAILURE:number;
    var RUNNING:number;
    var ERROR:number;

    var COMPOSITE:string;
    var DECORATOR:string;
    var ACTION:string;
    var CONDITION:string;

    function createUUID():any;
    function Class(baseClass:any):any;
}

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
/// core  ///////
declare namespace b3{
    class BaseNode{
       id:any;
       name:string;
       properties:any;
       parameters:any;
       title:string;

       initialize():void;
       close(tick:Tick):void;
       enter(tick:Tick):void;
       exit(tick:Tick):void;    
       open(tick:Tick):void;
       tick(tick:Tick):void;
    }
}

declare namespace b3{
    class BehaviorTree{
        id:any;
        title:string;
        description:string;
        properties:any;
        root:BaseNode;

        initialize():void;
        dump():any;
        load(data:any, names:any):void;
        tick(target:any, blackboard:Blackboard):string;
    }
}

declare namespace b3{
    class Action extends BaseNode{
        category:string;

        initialize():void;
    }
}

declare namespace b3{
    class Condition extends BaseNode{
        category:string;

        initialize():void;
    }
}

declare namespace b3{
    class Composite extends BaseNode{
        category:string;

        initialize():void;
    }
}

declare namespace b3{
    class Decorator extends BaseNode{
        category:string;

        initialize():void;
    }
}

declare namespace b3{
    class Tick{
        blackboard:Blackboard;
        debug:any;
        target:any;
        tree:BehaviorTree;

        initialize():void;
    }
}

declare namespace b3{
    class Blackboard{
        initialize():void;
        set(key:string, value:string, treeScope:string, nodeScope:string):void;
        get(key:string, treeScope:string, nodeScope:string):any;
    }
}

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
/// actions  ///////
declare namespace b3{
    class Error extends Action{
        category:string;
        name:string;

        initialize():void;
        tick(tick:Tick):any;
    }
}

declare namespace b3{
    class Failer extends Action{
        category:string;
        name:string;

        initialize():void;
        tick(tick:Tick):any;
    }
}

declare namespace b3{
    class Runner extends Action{
        category:string;
        name:string;

        initialize():void;
        tick(tick:Tick):any;
    }
}

declare namespace b3{
    class Succeeder extends Action{
        category:string;
        name:string;

        initialize():void;
        tick(tick:Tick):any;
    }
}

declare namespace b3{
    class Wait extends Action{
        category:string;
        name:string;
        parameters:string;

        initialize():void;
        open(tick:Tick):void;
        tick(tick:Tick):any;
    }
}

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
/// composites  ///////
declare namespace b3{
    class MemPriority extends Composite{
        name:string;

        open(tick:Tick):void;
        tick(tick:Tick):any;
    }
}

declare namespace b3{
    class MemSequence extends Composite{
        name:string;

        open(tick:Tick):void;
        tick(tick:Tick):any;
    }
}

declare namespace b3{
    class Priority extends Composite{
        name:string;

        tick(tick:Tick):any;
    }
}

declare namespace b3{
    class Sequence extends Composite{
        name:string;

        tick(tick:Tick):any;
    }
}

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
/// decorators  ///////
declare namespace b3{
    class Inverter extends Decorator{
        name:string;

        tick(tick:Tick):any;
        open(tick:Tick):void;
    }
}

declare namespace b3{
    class Limiter extends Decorator{
        name:string;
        title:string;
        parameters:any;

        initialize(settings:any):void;
        initialize():void;
        tick(tick:Tick):any;
        open(tick:Tick):void;
    }
}

declare namespace b3{
    class MaxTime extends Decorator{
        name:string;
        title:string;
        parameters:any;

        initialize(settings:any):void;
        initialize():void;
        tick(tick:Tick):any;
        open(tick:Tick):void;
    }
}

declare namespace b3{
    class Repeater extends Decorator{
        name:string;
        title:string;
        parameters:any;

        initialize(settings:any):void;
        initialize():void;
        tick(tick:Tick):any;
        open(tick:Tick):void;
    }
}

declare namespace b3{
    class RepeatUntilFailure extends Decorator{
        name:string;
        title:string;
        parameters:any;

        initialize(settings:any):void;
        initialize():void;
        tick(tick:Tick):any;
        open(tick:Tick):void;
    }
}

declare namespace b3{
    class RepeatUntilSuccess extends Decorator{
        name:string;
        title:string;
        parameters:any;

        initialize(settings:any):void;
        initialize():void;
        tick(tick:Tick):any;
        open(tick:Tick):void;
    }
}