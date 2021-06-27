 <template>
    <div class="progressbar">
        <ProgressbarItem :class="{'is-active' : getPageStatus.name === 'choiceOtel'}">
            <template v-slot:icon>
                <svg
                    enable-background="new 0 0 512 512"
                    version="1.1"
                    viewBox="0 0 512 512"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                <g>
                    <rect height="65" width="65" x="223.5" y="244.6" />
                    <rect height="65" width="65" x="325.4" y="244.6" />
                    <rect height="65" width="65" x="121.7" y="343.4" />
                    <rect height="65" width="65" x="223.5" y="343.4" />
                    <rect height="65" width="65" x="325.4" y="343.4" />
                    <path
                        d="M155.8,123.8L155.8,123.8c-16,0-29.1-13.1-29.1-29.1V29.2c0-16,13.1-29.1,29.1-29.1h0   c16,0,29.1,13.1,29.1,29.1v65.6C184.9,110.7,171.8,123.8,155.8,123.8z"/>
                    <path
                        d="M430.7,61.9h-33v39.7c0,24.5-19.7,44.5-43.8,44.5h-11.6c-24.1,0-43.8-20-43.8-44.5V61.9h-90.4v39.7   c0,24.5-19.7,44.5-43.8,44.5h-11.6c-24.1,0-43.8-20-43.8-44.5V61.9H83.6c-27.1,0-49.3,22.5-49.3,50v350c0,27.5,22.2,50,49.3,50   h347.2c27.1,0,49.3-22.5,49.3-50v-350C480,84.4,457.8,61.9,430.7,61.9z M422.3,414.7c0,17.1-13.8,31.1-30.6,31.1h-269   c-16.8,0-30.6-14-30.6-31.1V238.3c0-17.1,13.8-32.3,30.6-32.3h269c16.8,0,30.6,15.2,30.6,32.3V414.7z"/>
                    <path
                        d="M348.3,123.8L348.3,123.8c-16,0-29.1-13.1-29.1-29.1V29.2c0-16,13.1-29.1,29.1-29.1h0   c16,0,29.1,13.1,29.1,29.1v65.6C377.4,110.7,364.3,123.8,348.3,123.8z"/>
                </g>
                </svg>
            </template>
            <template v-slot:title>
                Otel ve Tarih <br> Seçimi
            </template>
        </ProgressbarItem>
        <ProgressbarItem :class="{'is-active' : getPageStatus.name === 'choiceRoom'}">
            <template v-slot:icon>
                <svg
                    style="enable-background:new 0 0 240 240;"
                    version="1.1"
                    viewBox="0 0 240 240"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="#2f3a3f"
                >
                    <path
                        d="M80,119.834c0,13.241-10.729,23.979-23.963,23.979c-13.232,0-23.962-10.737-23.962-23.979  c0-13.239,10.729-23.975,23.962-23.975C69.271,95.859,80,106.595,80,119.834z M80,143.812c42.6,0,85.201,0,127.801,0  C162.759,100.185,125.654,102.203,80,143.812L80,143.812z M224.025,112.094v47.953H15.975V80H0v127.875h15.975v-16.109h208.05V208  H240v-95.906H224.025z"
                    />
                </svg>
            </template>
            <template v-slot:title>
                Oda Tipi ve Manzara <br> Seçimi
            </template>
        </ProgressbarItem>
        <ProgressbarItem :class="{'is-active' : getPageStatus.name === 'payment'}">
            <template v-slot:icon>
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#2f3a3f">
                    <path
                        d="M18 6V4H2v2h16zm0 4H2v6h16v-6zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm4 8h4v2H4v-2z"
                    />
                </svg>
            </template>
            <template v-slot:title>
                Önizleme ve Ödeme <br> İşlemleri
            </template>
        </ProgressbarItem>
    </div>
</template>

<script>
import ProgressbarItem from '@/components/ProgressbarItem.vue'

export default {
    name: 'Progressbar',
    components: {
        ProgressbarItem
    },
    computed: {
        getPageStatus () {
            return this.$store.getters.getPageStatus
        }
    }
}
</script>

<style lang="scss" scoped>
    .progressbar {
        background: #f1f1f1;
        padding: 15px 30px;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>
