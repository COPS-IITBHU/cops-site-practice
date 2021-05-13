<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" xs="12" sm="6" md="6" lg="4">
        <v-card width="400" class="border">
          <v-card-title class="justify-center">
            <v-chip color="black" class="border">
              <h3>Join the Force</h3>
            </v-chip>
          </v-card-title>
          <v-row>
            <v-col sm="6" align="center">
              <h5 style="padding-bottom: 5px">Telegram</h5>
              <a
                style="color: white"
                href="https://t.me/cops_csoc"
                target="_blank"
              >
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/3e1da640e85903a09d8d5eb10b87f2c74fa9f98e/eb3f5/static/assets/img/telegram.png"
                  alt="Telegram-Logo"
                  border="0"
                  height="60"
                  width="60"
                />
                <h5>@cops_csoc</h5>
              </a>
            </v-col>
            <v-col sm="6" align="center">
              <h5 style="padding-bottom: 5px">Google Group</h5>
              <a
                style="color: white"
                href="https://groups.google.com/forum/#!forum/csoc-cops"
                target="_blank"
              >
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/7a225340bc4d9ca9e7f4db5e78c8246148f9ed00/542c6/static/assets/img/google-group.png"
                  alt="Google-Group-Logo"
                  border="0"
                  height="60"
                  width="60"
                />
                <h5>@csoc-cops</h5>
              </a>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style scoped>
.border {
  border: 2px solid rgb(255, 255, 255) !important ;
}
</style>
