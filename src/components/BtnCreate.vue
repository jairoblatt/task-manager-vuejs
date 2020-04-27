<template>
    <a 
    href="#" 
    class="float"
	@click="show"
    >
        <i class="fa fa-plus my-float"></i>
    </a>
</template>

<script>
export default {
    name:'BtnCreate',
    methods: {
		show() {
			this.$modal.show('task-create');
		}
	}
}
</script>

<style scope>
.float{
	position:fixed;
	width:100px;
	height:100px;
	bottom:40px;
	right:40px;
	background-color:#5969ff!important;
	color:#FFF;
	border-radius:50px;
	text-align:center;
	box-shadow: 2px 2px 3px #999;
	z-index: 999;
}

.my-float{
	margin-top:22px;
}
</style>