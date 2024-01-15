<template>
    <form @submit.prevent="handleSubmit">
        <label for="">Email</label>
        <input type="email" required v-model="email">
        <label for="">Password</label>
        <input type="Password" required v-model="password">

        <label for="">Role:</label>
        <select v-model="role">
            <option value="developer">Web Developer</option>
            <option value="designer">Web Designer</option>
            <option value="designer">Project Manager</option>

        </select>

        <!-- inputing multiple elements in one input field with the us of comma -->
        <label for="">Skills</label>
        <!-- keyup.alt removes comma -->
        <input type="text" v-model="tempskill" @keyup.alt="addskill">
        <div v-for="skill in skills" :key="skill" class="pill">
           <span @click="deleteSkill(skill)">{{ skill }}</span> 
        </div>
        <div class="terms">
            <input type="checkbox" v-model="terms" required>
            <label>Accept terms and conditions</label>
        </div>
        <!-- <div>
            <input type="checkbox" value="Williams" v-model="names">
            <label for="">Williams</label>
        </div>
        <div>
            <input type="checkbox" value="Bella" v-model="names">
            <label for="">Bella</label>
        </div>
        <div>
            <input type="checkbox" value="Serena" v-model="names">
            <label for="">Serena</label>
        </div> -->
        <div class="submit"> 
            <button>Creat an account</button>
        </div>
    </form>

    <p>email:{{ email }}</p>
    <p>password:{{ password }}</p>
    <p>Role:{{ role }}</p>
    <p>Terms Accepted:{{ terms }}</p>
    <!-- <p>names:{{ names }}</p> -->
</template>

<script>
export default {
    data() {
        return {
            email: 'mario',
            password: "",
            role: 'designer',
            terms: false,
            tempskill: '',
            skills: []
            // names: []
        }
    },
    methods: {
        addskill(e) {
            if (e.key === ',' && this.tempskill) {
                // prevents duplication of thesame skills in input
                if (!this.skills.includes(this.tempskill)) {
                    this.skills.push(this.tempskill)
                }
                this.tempskill = ''
            }
        },
        deleteSkill(skill){
            this.skills = this.skills.filter((item) =>{
                return skill !== item
            })
        }
        // handleSubmit(){
        //     console.log('yep')
        // }
    }
}
</script>

<style  scoped>
form {
    max-width: 420px;
    margin: 30px auto;
    background: rgb(1, 50, 68);
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input,
select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555
}

input[type='checkbox'] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px
}
.pill{
    display:inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}
button{
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}
.submit{
    text-align: center;
}
</style>