<template>
<section class="section">
    <div class="container" >

		<div class="tabs">
			<ul>
				<li class="is-active"><a>Dictionary</a></li>
			</ul>
		</div>

		<div class="field">
			<label class="label">Search in merriam-webster.com</label>
			<div class="control">
				<input class="input" name="word" v-validate="'required'" v-model="word" type="text" placeholder="">
			<p class="help is-danger" v-if="errors.has('word')">{{ errors.first('word') }}</p>
			</div>
		</div>
		
		<div class="field mb-20">

			<div class="control">

				<button :class="{ 'is-warning':errors.any(), 'is-loading':loading }"  @click="translate" class="button is-info">Search</button>

			</div>

		</div>

		<div class="field">
			
			<div class="control ">

				<div v-if="no_definitions_found">We did not find a definition for that word, but consider the next alternatives:<br/>
					<h3 class="is-size-4">Suggestions</h3>
					
					{{ definitions }}
				</div>

				<div  v-else>
					<definition  v-for="item in definitions" :definition="item"></definition>
				</div>
			</div>
		</div>



    </div>
</section>
</template>

<script>


export default {
	

	computed:{

		no_definitions_found: function(){

			return this.$store.getters['definition/no_definitions_found'] || false

		},

		definitions: function(){

			return this.$store.getters['definition/definitions'] || []

		},

		loading: function(){

			return this.$store.getters['definition/loading'] || false

		}

	},

    data: function(){
		
		return {

			word: ''
			
		}
		
	},
	

    
    methods: {
		
		translate: function(){

			this.$validator.validateAll().then(

                result => {

                    if (result){

						this.$store.dispatch('definition/GET', this.word )

					}

				})

		}
		
    },
    
    components:{

        'definition': require('./components/definition.vue').default
    }

}
</script>

<style scoped>
	
	.container{


		background: #ffffff;
		padding: 1.3em;
		-webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.3);
		-moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.3);
		box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.3);
		

	}

	.mb-20{
		margin-bottom: 20px;
	}




</style>
