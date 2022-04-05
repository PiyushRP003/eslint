module.exports = {
    create(context){
        return{
            CallExpression(node){
                if(node.callee.name === 'getName'){
                    context.report({
                        node:node,
                        message:'getName is not accepted use getFirstNAme instead'
                    });
                }
            }
        };
    }
};