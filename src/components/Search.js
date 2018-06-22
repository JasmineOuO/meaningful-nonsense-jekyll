import * as React from "react";
import * as ReactDOM from "react-dom";
import {
	SearchkitManager,
	SearchkitProvider,
    SearchBox,
    RefinementListFilter,
	DynamicRangeFilter,
    Hits,
	NoHits,
    HitsStats,
	HitItemProps,
    SearchkitComponent,
    SelectedFilters,
    MenuFilter,
    HierarchicalMenuFilter,
    Pagination,
	PaginationSelect,
    ResetFilters,
	TopBar,
	Layout, 
	LayoutBody, 
	LayoutResults,
	ActionBar,
	ActionBarRow,
	SideBar
    } from "searchkit";
import * as _ from "lodash";
//import { DateRangeFilter, DateRangeCalendar } from "searchkit-datefilter"

const searchkit = new SearchkitManager("https://blog-2086566074.us-east-1.bonsaisearch.net", {})

const HitItem = (props) => (
  <div className={props.bemBlocks.item().mix(props.bemBlocks.container("item"))}>
    <a href={ `https://jasmineouo.github.io/Blog${props.result._source.url}` }>
      <div className={props.bemBlocks.item("title")} 
        dangerouslySetInnerHTML={{__html:_.get(props.result,"highlight.title",false) || props.result._source.title}}></div>
    </a>
    <div>
      <small className={props.bemBlocks.item("hightlights")}
        dangerouslySetInnerHTML={{__html:_.get(props.result,"highlight.text",'')}}></small>
    </div>
  </div>
)

class Search extends SearchkitComponent {
  render(){
	return (
        <SearchkitProvider searchkit={searchkit}>
            <div className="search_bar">
                <TopBar>
                    <SearchBox
                        searchOnChange={true}
                        autoFocus={true}
                        queryOptions={{ analyzer: "standard" }}
                        translations={{ "searchbox.placeholder": "Search", "NoHits.DidYouMean": "Search for {suggestion}." }}
                        queryFields={["title", "text"]} />
                </TopBar>
            </div>
            <div className="search_page">
                <Layout>
                    <LayoutBody>
                        <div className="search_filter">
                            <SideBar>
                                <RefinementListFilter
                                    id="categories"
                                    title="Category"
                                    field="categories"
                                    operator="OR"/>
                                <RefinementListFilter
                                    id="tags"
                                    title="Tags"
                                    field="tags"
                                    operator="OR" />
                            </SideBar>
                        </div>
				        <LayoutResults className="_Search_display_wrapper">
					        <div className="search_results">
						        <Hits hitsPerPage={50}
						        highlightFields={["title", "text"]}
							        mod="sk-hits-list"
						        itemComponent={HitItem}/>
						        <NoHits className="sk-hits" translations={{
						        "NoHits.NoResultsFound":"No results were found for {query}",
						        "NoHits.DidYouMean":"Search for {suggestion}"
						        }} suggestionsField="text"/>
					        </div>
                            </LayoutResults>
                        </LayoutBody>
                    </Layout>
                </div>
		</SearchkitProvider>
	)
  }
}
export default Search;


