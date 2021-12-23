<template>
  <div class="py-20 lg:pl-24">
    <Navbar />
    <div class="font-serif text-5xl pb-6">Music</div>
    <div class="text-lg">
      <a class="text-blue-600 hover:text-black" href="https://www.youtube.com/channel/UC3jYTktwIe_NmS9N2Fb-kMg">YouTube</a>
    </div>
    <div class="text-lg"> 
      Studying piano since <span class="font-bold">age 5 (12 years)</span>,
      currently studying with <span class="font-bold"> John McCarthy </span> 
    </div>

    <div class="pt-12 pb-5 font-serif text-3xl"> Repertoire </div>
    

    <!-- 
    <div class="py-3" v-for="i in repertoire" :key="i.composer">
      <div class="font-bold text-xl w-72 pr-6 pb-2">{{i.composer}}</div>
      <div class="pl-4">
        <div v-for="piece in i.pieces" :key="piece">
          <div class="text-base pb-1">
            <span class="text-blue-600 hover:text-black cursor-pointer" v-if="piece.title"
              @mouseover="display = piece" @mouseleave="display = { }"> 
              <a :href="piece.url">{{piece.title}} </a>
             </span>
            <span v-else>{{piece}}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="m-36">space</div>
    
    <div class="flex align-center py-3 text-xl" v-for="i in repertoire" :key="i.composer">
      <div class="font-bold w-72 pr-6">
        <div class="flex items-center">
          {{i.composer}}
          <div class="hline flex-grow ml-6 bg-gray-400"></div>
        </div>
      </div>
      <div class="pt-0.5">
        <div v-for="piece in i.pieces" :key="piece">
          <div class="text-base align-text-bottom pb-1">
            <span class="text-blue-600 hover:text-black cursor-pointer" v-if="piece.title"
              @mouseover="display = piece" @mouseleave="display = { }"> 
              <a :href="piece.url">{{piece.title}} </a>
             </span>
            <span v-else>{{piece}}</span>
          </div>
        </div>
      </div>
    </div>

    -->
    
    <div class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mr-72">
      <div class="bg-gray-200 p-6 rounded-lg" v-for="i in repertoire" :key="i.composer">
        <div class="pb-2 font-bold text-xl">{{i.composer}}</div>
        <div v-for="piece in i.pieces" :key="piece">
          <div class="text-sm pt-1">
            <span class="text-blue-600 hover:text-black cursor-pointer" v-if="piece.title"
              @mouseover="display = piece" @mouseleave="display = { }"> 
              <a :href="piece.url">{{piece.title}} </a>
             </span>
            <span v-else>{{piece}}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-20 pb-6 font-serif text-3xl"> Awards </div>


    <div class="flex align-center py-3 text-xl" v-for="i in awards" :key="i.year">
      <div class="font-bold w-72 pr-6">
        <div class="flex items-center">
          {{i.year}}
          <div class=" hline flex-grow ml-8 mr-4 bg-gray-400"></div>
        </div>
      </div>
      <div class="pt-0.5">
        <div v-for="award in i.awards" :key="award">
          <div class="text-base align-text-bottom pb-1">
            {{award.position}}, {{award.name}}
          </div>
        </div>
      </div>
    </div>

    <!--
    <div class="fixed top-0 left-0" v-if="display.url"> 
      this is a test!!!
    </div>
    -->

  </div>
</template>

<script>
export default {
  name: 'Music',
  data () {
    return {
      display: {},
      repertoire: [
        {
          composer: "J.S. Bach",
          pieces: [
            "Prelude and Fugue in E-flat major, BWV 852",
            "Prelude and Fugue in G minor, BWV 861",
            "Toccata in F-sharp minor, BWV 910",
            "Toccata in E minor, BWV 914",
          ],
        },
        {
          composer: "Ludwig van Beethoven",
          pieces: [
            "Sonata in D minor, Op. 31, No. 2",
            "Sonata in E-flat major, Op. 31, No. 3",
            {
              title: "Sonata in C major, Op. 53",
              url: "https://www.youtube.com/watch?v=lvybSgvr8Hw",
            },
          ],
        },
        {
          composer: "Frederic Chopin",
          pieces: [
            "Etude in F major, Op. 10, No. 8",
            "Etude in C minor, Op. 10, No. 12",
            "Grande Valse Brilliante in E-flat major, Op. 18",
            "Nocturne in D-flat major, Op. 27, No. 2",
            "Nocturne in C minor, Op. 48, No. 1",
            "Scherzo in B-flat minor, Op. 31",
            "Ballade in F major, Op. 38",
            "Piano Sonata in B-flat minor, Op. 35",
          ],
        },
        {
          composer: "Franz Liszt",
          pieces: [
            "Hungarian Rhapsody in C-sharp minor, S.244/2",
          ]
        },
        {
          composer: "Sergei Rachmaninoff",
          pieces: [
            "Étude-Tableau in C major, Op. 33, No. 2",
            "Piano Concerto in C minor, Op. 18, I. Moderato",
          ]
        },
        {
          composer: "Sergei Bortkiewicz",
          pieces: [
            "Piano Sonata no. 2 in C-sharp minor, Op. 60",
          ]
        },
        {
          composer: "Mily Balakirev",
          pieces: [
            "Scherzo no. 1 in B minor",
          ]
        },
        {
          composer: "Sergei Prokofiev",
          pieces: [
            "Sonata no. 3 in A minor, Op. 28",
          ]
        },
        {
          composer: "Roger Sessions",
          pieces: [
            "Piano Sonata no. 3 \"Kennedy Sonata\", III. Lento e molto tranquillo",
          ]
        },
      ],
      awards: [
        {
          year: 2021,
          awards: [
            {
              position: "Second Place",
              name: "Carmel International Piano Competition, Solo Category"
            },
            {
              position: "Honorable Mention",
              name: "Palo Alto Philharmonic Concerto Movement Competition"
            },
            {
              position: "Honorable Mention",
              name: "CAPMT Honors and Contemporary Competitions"
            },
          ] 
        },
        {
          year: 2020,
          awards: [
            {
              position: "First Place",
              name: "2020 USIMC Chinese Music Award"
            },
            {
              position: "Outstanding Gold Medal",
              name: "US Open Music Competition"
            },
            {
              position: "Panel Honors",
              name: "MTAC CM Panel"
            },
            {
              position: "Second Place",
              name: "KAMSA Senior Piano division"
            },
            {
              position: "Honorable Mention",
              name: "Young Pianist’s Beethoven Competition"
            },
            {
              position: "Performer",
              name: "Junior Bach Festival"
            },
          ] 
        },
        {
          year: 2019,
          awards: [
            {
              position: "First Place",
              name: "Thera Rabinowitch Competition"
            },
            {
              position: "Piano",
              name: "California All-State Concert Band"
            },
            {
              position: "First Place",
              name: "American Protege Music Talent Competition"
            },
          ] 
        },
        {
          year: 2018,
          awards: [
            {
              position: "Second Place",
              name: "USIMC Special Bach Category"
            },
          ] 
        },
        {
          year: 2017,
          awards: [
            {
              position: "Second Place",
              name: "San Francisco Chopin Competition for Young Pianists"
            },
            {
              position: "Second Place",
              name: "CAPMT Contemporary State Finals"
            },
          ] 
        },
        {
          year: "Other Competitions",
          awards: [
            {
              position: "First Place",
              name: "ENKOR Competition (13-18 year age group)"
            },
            {
              position: "Various Positions",
              name: "US Open Music Competition, MTAC"
            },
          ] 
        }
      ]
    }
  },
}
</script>

<style scoped>
  .hline {
    height: 0.05rem;
  }
</style>